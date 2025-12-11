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
		children: [
			{ id: 1, name: "Sales Record", href: "/app/selling/list" },
			{ id: 2, name: "Customer", href: "/app/selling/customers" },
			{ id: 3, name: "Sales Return", href: "/app/selling/returns" },
		],
		img: SellingIcon,
	},
	{
		id: 3,
		name: "buying",
		href: "/app/buying",
		children: [
			{ id: 1, name: "Purchase Record", href: "/app/buying/list" },
			{ id: 2, name: "Supplier", href: "/app/buying/suppliers" },
			{ id: 3, name: "Purchase Return", href: "/app/buying/returns" },
		],
		img: BuyingIcon,
	},
	{
		id: 4,
		name: "product",
		href: "/app/product",
		children: [
			{ id: 1, name: "Catalogue", href: "/app/product/catalogue" },
			{ id: 2, name: "Stock Adjustment", href: "/app/product/stocks" },
			{
				id: 3,
				name: "Non Inventory Items",
				href: "/app/product/non-inventory",
			},
			{ id: 4, name: "Price Set Up", href: "/app/product/price-setup" },
		],
		img: ProductIcon,
	},
	{ id: 5, name: "transfer", href: "/app/transfer", img: TransferIcon },
	{ id: 6, name: "expense", href: "/app/expense", img: ExpenseIcon },
	{ id: 7, name: "report", href: "/app/report", img: ReportIcon },
];

export default routes;
