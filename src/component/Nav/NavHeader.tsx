import { FaPlus } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useAppSelector } from "../../redux/hooks";
import { NavHeaderStyles } from "../../styles/nav.styles";
import AppDropDown from "../DropDowns/AppDropDown";
import UserDropDown from "../DropDowns/UserDropDown";
import BusinessSelect from "../BusinessSelect";

const NavHeader = ({ setOpen }: { setOpen: (arg: boolean) => void }) => {
	const { minimizedNav } = useAppSelector((state) => state.settings);

	return (
		<NavHeaderStyles minimize={`${minimizedNav}`}>
			<div className="biz">
				<BusinessSelect />
			</div>
			<div className="menus">
				<div className="plus nav-btn">
					<button className="nav-btn">
						<FaPlus />
					</button>
				</div>
				<AppDropDown />
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
