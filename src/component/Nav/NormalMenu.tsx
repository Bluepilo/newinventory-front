import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const NormalMenu = ({ menu }: { menu: any }) => {
	const { minimizedNav } = useAppSelector((state) => state.settings);
	return (
		<NavLink to={menu.href} className={"menu"}>
			<div className="box">
				<img src={menu.img} />
			</div>
			<span>{menu.name}</span>
			{minimizedNav && <span className="tooltip">{menu.name}</span>}
		</NavLink>
	);
};

export default NormalMenu;
