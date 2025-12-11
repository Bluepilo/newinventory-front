import { FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavCollapsedDrop } from "../../styles/nav.styles";
import OutsideClick from "../OutsideClick";
import { useAppSelector } from "../../redux/hooks";

const CollapsedMenu = ({
	menu,
	isOpen,
	onOpen,
}: {
	menu: any;
	isOpen: boolean;
	onOpen: (arg: string) => void;
}) => {
	const { minimizedNav } = useAppSelector((state) => state.settings);

	return (
		<div style={{ position: "relative" }}>
			<NavLink
				to={menu.href}
				className={"menu"}
				onClick={(e) => {
					e.preventDefault();
					onOpen(menu.name);
				}}
			>
				<div className="box">
					<img src={menu.img} />
				</div>
				<span>{menu.name}</span>
				{minimizedNav && <span className="tooltip">{menu.name}</span>}
				<FaCaretRight />
			</NavLink>
			{isOpen && (
				<OutsideClick handleToggle={() => onOpen("")}>
					<NavCollapsedDrop className="shadow-sm">
						<div className="top-drop">{menu.name}</div>
						<div className="bottom-drop">
							{menu.children.map((nav: any) => (
								<NavLink
									to={nav.href}
									key={nav.id}
									onClick={() => onOpen("")}
								>
									{nav.name}
								</NavLink>
							))}
						</div>
					</NavCollapsedDrop>
				</OutsideClick>
			)}
		</div>
	);
};

export default CollapsedMenu;
