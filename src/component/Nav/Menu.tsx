import { useState } from "react";
import { MenuBoard } from "../../styles/nav.styles";
import CollapsedMenu from "./CollapsedMenu";
import NormalMenu from "./NormalMenu";
import routes from "./routes";

const Menu = ({ minimized }: { minimized: boolean }) => {
	const [openedMenu, setOpenedMenu] = useState("");

	return (
		<MenuBoard minimized={minimized}>
			{routes.map((route) =>
				route.children ? (
					<CollapsedMenu
						key={route.id}
						menu={route}
						isOpen={openedMenu === route.name}
						onOpen={(arg) => setOpenedMenu(arg)}
					/>
				) : (
					<NormalMenu key={route.id} menu={route} />
				)
			)}
		</MenuBoard>
	);
};

export default Menu;
