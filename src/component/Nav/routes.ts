import DashboardIcon from "../../assets/icons/dashboard-icon.svg";
import SellingIcon from "../../assets/icons/selling-icon.svg";
import BuyingIcon from "../../assets/icons/buying-icon.svg";
import ProductIcon from "../../assets/icons/product-icon.svg";
import TransferIcon from "../../assets/icons/transfer-icon.svg";
import ExpenseIcon from "../../assets/icons/expense-icon.svg";
import ReportIcon from "../../assets/icons/report-icon.svg";

const routes = [
	{ id: 1, name: "dashboard", href: "/app/dashboard", img: DashboardIcon },
	{
		id: 2,
		name: "selling",
		href: "/app/selling",
		children: [],
		img: SellingIcon,
	},
	{
		id: 3,
		name: "buying",
		href: "/app/buying",
		children: [],
		img: BuyingIcon,
	},
	{
		id: 4,
		name: "product",
		href: "/app/product",
		children: [],
		img: ProductIcon,
	},
	{ id: 5, name: "transfer", href: "/app/transfer", img: TransferIcon },
	{ id: 6, name: "expense", href: "/app/expense", img: ExpenseIcon },
	{ id: 7, name: "report", href: "/app/report", img: ReportIcon },
];

export default routes;
