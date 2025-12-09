import { HiOutlineUser } from "react-icons/hi";
import { BasicDrop } from "../../styles/app.styles";
import { useState } from "react";
import OutsideClick from "../OutsideClick";

const UserDropDown = () => {
	const [open, setOpen] = useState(false);

	const logoutHandler = () => {};

	return (
		<>
			<OutsideClick handleToggle={() => setOpen(false)}>
				<div style={{ position: "relative" }}>
					<button className="nav-btn" onClick={() => setOpen(!open)}>
						<HiOutlineUser />
					</button>
					<BasicDrop $open={open} className="shadow-sm" align="right">
						<div className="button" style={{ width: "150px" }}>
							<span>User Profile</span>
						</div>
						<div className="button">
							<span>Security</span>
						</div>
						<div className="button blue" onClick={logoutHandler}>
							<span>Log Out</span>
						</div>
					</BasicDrop>
				</div>
			</OutsideClick>
		</>
	);
};

export default UserDropDown;
