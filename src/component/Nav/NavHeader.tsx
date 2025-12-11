import { FaPlus, FaRegBell } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useAppSelector } from "../../redux/hooks";
import { NavHeaderStyles } from "../../styles/nav.styles";
import AppDropDown from "../DropDowns/AppDropDown";
import UserDropDown from "../DropDowns/UserDropDown";
import BusinessSelect from "../BusinessSelect";
import CompletionCount from "./CompletionCount";
import { IoSettingsOutline } from "react-icons/io5";

const NavHeader = ({ setOpen }: { setOpen: (arg: boolean) => void }) => {
	const { minimizedNav } = useAppSelector((state) => state.settings);

	return (
		<NavHeaderStyles minimize={`${minimizedNav}`}>
			<div className="biz">
				<BusinessSelect />
				<CompletionCount />
			</div>
			<div className="menus">
				<div className="plus nav-btn">
					<button className="nav-btn">
						<FaPlus />
					</button>
				</div>
				<AppDropDown />
				<button className="nav-btn">
					<IoSettingsOutline />
				</button>
				<button className="nav-btn">
					<FaRegBell />
				</button>
				<UserDropDown />
			</div>
			<div className="menu-mobile">
				<button className="nav-btn" onClick={() => setOpen(true)}>
					<LuMenu />
				</button>
			</div>
		</NavHeaderStyles>
	);
};

export default NavHeader;
