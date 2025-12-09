import { FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CollapsedMenu = ({ menu }: { menu: any }) => {
	return (
		<>
			<NavLink to={menu.href} className={"menu"}>
				<div className="box">
					<img src={menu.img} />
				</div>
				<span>{menu.name}</span>
				<FaCaretRight />
			</NavLink>
		</>
	);
};

export default CollapsedMenu;
