import { SidebarDiv } from "../../styles/nav.styles";
import LogoFull from "../../assets/images/full-logo-light.svg";
import LogoSmall from "../../assets/images/small-logo.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hooks";
import { changeNavMinimized } from "../../redux/settings/settingsSlice";
import Menu from "./Menu";

const Sidebar = ({ minimized }: { minimized: boolean; open: boolean }) => {
	const dispatch = useAppDispatch();

	return (
		<SidebarDiv minimize={`${minimized}`}>
			<div className="logo">
				<img
					src={minimized ? LogoSmall : LogoFull}
					className="logo-img"
				/>
			</div>
			<Menu minimized={minimized} />
			<div className="side-bottom">
				<button
					onClick={() => dispatch(changeNavMinimized(!minimized))}
				>
					{minimized ? <FaAngleRight /> : <FaAngleLeft />}
				</button>
			</div>
		</SidebarDiv>
	);
};

export default Sidebar;
