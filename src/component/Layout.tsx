import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PageContent, PageStyle } from "../styles/nav.styles";
import Sidebar from "./Nav/Sidebar";
import OutsideClick from "./OutsideClick";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import NavHeader from "./Nav/NavHeader";
import { paths } from "../utils/data";

const Layout = () => {
	const navigate = useNavigate();

	const location = useLocation();

	const { user } = useAppSelector((state) => state.auth);
	const { minimizedNav } = useAppSelector((state) => state.settings);

	const [open, setOpen] = useState(false);

	const pathName = paths.find((path) => path.href === location.pathname);
	const redirection = pathName ? `?redirect=${pathName.name}` : "";

	useEffect(() => {
		if (!user?.id) {
			navigate(`/auth/callback${redirection}`);
		}
	}, [user]);

	return (
		<PageStyle>
			<OutsideClick handleToggle={() => setOpen(false)}>
				<Sidebar minimized={minimizedNav} open={open} />
			</OutsideClick>
			<NavHeader setOpen={setOpen} />
			<PageContent minimized={`${minimizedNav}`}>
				<div className="content-page">
					<Outlet />
				</div>
			</PageContent>
		</PageStyle>
	);
};

export default Layout;
