import { Outlet } from "react-router-dom";
import { PageContent, PageStyle } from "../styles/nav.styles";
import Sidebar from "./Nav/Sidebar";
import OutsideClick from "./OutsideClick";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";
import NavHeader from "./Nav/NavHeader";

const Layout = () => {
	const { minimizedNav } = useAppSelector((state) => state.settings);

	const [open, setOpen] = useState(false);

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
