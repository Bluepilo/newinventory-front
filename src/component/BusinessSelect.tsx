import { FaCaretDown } from "react-icons/fa6";
import { BasicDrop, BizSelectStyle } from "../styles/app.styles";
import { useState } from "react";
import { IoIosCheckmarkCircle, IoMdBusiness } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Spinner } from "react-bootstrap";
import { FiPlusSquare } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import OutsideClick from "./OutsideClick";
import businessService from "../redux/business/businessService";
import { fetchUserProfile } from "../redux/auth/authSlice";
import { displayError } from "../utils/display";

const BusinessSelect = ({ onLayout }: { onLayout?: boolean }) => {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);

	const [open, setOpen] = useState(false);
	const [load, setLoad] = useState(false);
	const [id, setId] = useState<any>(null);

	const switchHandler = async (id: any) => {
		if (!load) {
			if (id != user.businessId) {
				try {
					setId(id);
					setLoad(true);
					await businessService.switchBusiness(id);
					setLoad(false);
					dispatch(fetchUserProfile());
					setOpen(false);
				} catch (err) {
					setLoad(false);
					displayError(err, true);
				}
			}
		}
	};

	return user?.business ? (
		<OutsideClick handleToggle={() => setOpen(false)}>
			<BizSelectStyle>
				<div
					className={onLayout ? "head" : "select"}
					onClick={() => setOpen(!open)}
				>
					<span>{user.business?.name}</span>
					{onLayout ? <GoTriangleDown size={20} /> : <FaCaretDown />}
				</div>
				<BasicDrop $open={open}>
					{user.allowedBusinesses.map((biz) => (
						<div
							className={`button shadow-sm ${
								user.business.id === biz.business.id
									? "active"
									: ""
							}`}
							key={biz.business.id}
							onClick={() => switchHandler(biz.business.id)}
						>
							{load && id == biz.business.id && (
								<Spinner
									size="sm"
									style={{ marginRight: "10px" }}
								/>
							)}
							<IoMdBusiness size={16} />
							<span>{biz.business.name}</span>
							{user.business.id === biz.business.id && (
								<IoIosCheckmarkCircle
									size={16}
									className="ms-3"
								/>
							)}
						</div>
					))}
					<div
						className="button shadow-sm blue"
						onClick={() => {
							navigate("/dashboard/new-business");
							setOpen(false);
						}}
					>
						<FiPlusSquare size={16} />
						<span>Add a New Business</span>
					</div>
				</BasicDrop>
			</BizSelectStyle>
		</OutsideClick>
	) : (
		<></>
	);
};

export default BusinessSelect;
