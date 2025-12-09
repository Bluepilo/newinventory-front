import { useState } from "react";
import OutsideClick from "../OutsideClick";
import { IoApps } from "react-icons/io5";
import { BasicDrop } from "../../styles/app.styles";

const AppDropDown = () => {
	const [open, setOpen] = useState(false);

	const navigateTo = (val: any) => {};

	const color = (val: string) => {
		if (val == "reporting") {
			return "purple";
		} else if (val === "ledger") {
			return "black";
		} else if (val === "crm") {
			return "green";
		} else if (val === "inventory") {
			return "blue";
		} else {
			return "main";
		}
	};

	const apps = [{ appKey: "Inventory" }];

	return (
		<OutsideClick handleToggle={() => setOpen(false)}>
			<div style={{ position: "relative" }}>
				<button className="nav-btn" onClick={() => setOpen(!open)}>
					<IoApps />
				</button>
				<BasicDrop $open={open} className="shadow-sm" align="right">
					{apps?.map((app: any) => (
						<div
							key={app.id}
							className={`button ${color(app.appKey)}`}
							style={{
								width: "150px",
								textTransform: "capitalize",
							}}
							onClick={() => navigateTo(app)}
						>
							<span>{app.appKey}</span>
						</div>
					))}
				</BasicDrop>
			</div>
		</OutsideClick>
	);
};

export default AppDropDown;
