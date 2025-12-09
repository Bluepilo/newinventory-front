import { MenuBoard } from "../../styles/nav.styles";
import CollapsedMenu from "./CollapsedMenu";
import NormalMenu from "./NormalMenu";
import routes from "./routes";

const Menu = ({ minimized }: { minimized: boolean }) => {
	return (
		<MenuBoard minimized={minimized}>
			{routes.map((route) =>
				route.children ? (
					<CollapsedMenu key={route.id} menu={route} />
				) : (
					<NormalMenu key={route.id} menu={route} />
				)
			)}
		</MenuBoard>
	);
};

export default Menu;
