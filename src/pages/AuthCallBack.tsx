import { AuthCover } from "../styles/app.styles";
import Img from "../assets/images/full-logo-light.svg";
import ProgressBar from "../component/ProgressBar";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { fetchUserProfile } from "../redux/auth/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "../utils/data";
import { decryptToken } from "../utils/redirect";

const AuthCallBack = () => {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	const [progress, setProgress] = useState(0);

	const redirectTo = searchParams.get("redirect");
	const authToken = searchParams.get("auth");

	useEffect(() => {
		const id = setInterval(() => {
			setProgress((p) => {
				if (p >= 100) {
					clearInterval(id);
					return 100;
				}
				return p + 5;
			});
		}, 500);
		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		fetchProfile();
	}, []);

	const fetchProfile = async () => {
		try {
			decryptToken(authToken || "");
			let profile = await dispatch(fetchUserProfile()).unwrap();
			if (profile?.id) {
				let find = paths.find((path) => path.name === redirectTo);
				navigate(find ? `${find.href}` : `/app/dashboard`);
			}
		} catch (err: any) {
			redirectHandler();
		}
	};

	const redirectHandler = () => {
		try {
			let url = import.meta.env.VITE_APP_REDIRECT_URL;
			window.location.replace(
				`${url}?from=inventory&redirect=${redirectTo}`
			);
		} catch (err) {}
	};

	return (
		<AuthCover>
			<div className="box">
				<img src={Img} />
			</div>
			<div style={{ width: "180px" }}>
				<ProgressBar value={progress} />
			</div>
		</AuthCover>
	);
};

export default AuthCallBack;
