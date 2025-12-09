import { NavLink } from "react-router-dom";

const NormalMenu = ({ menu }: { menu: any }) => {
	return (
		<NavLink to={menu.href} className={"menu"}>
			<div className="box">
				<img src={menu.img} />
			</div>
			<span>{menu.name}</span>
		</NavLink>
	);
};

export default NormalMenu;
