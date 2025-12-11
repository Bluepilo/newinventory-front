import { KickStartStyle } from "../styles/app.styles";
import SalesImg from "../assets/svgs/sales-start.svg";
import CustomerImg from "../assets/svgs/customer-start.svg";

const KickStart = ({
	page,
	subPage,
}: {
	page: "sales" | "expense" | "product" | "purchase" | "customers";
	subPage?: "customers";
}) => {
	const arr = [
		{
			id: 1,
			title: "No Sales, no story",
			img: SalesImg,
			desc: `This is where every sale begins. Record your first sale and
					build your success story`,
			btnName: "Make Sales",
			page: "sales",
		},
		{
			id: 2,
			title: "Every business needs friends",
			img: CustomerImg,
			desc: `Add your customers here and never lose track of who keeps you going`,
			btnName: "Add Customer",
			page: "customers",
			subPage: "customers",
		},
	];

	let findContent = arr.find((a) => a.page === page || a.subPage === subPage);

	return findContent?.id ? (
		<KickStartStyle>
			<div className="content">
				<img src={findContent.img} className="img-fluid" />
				<h5>{findContent.title}</h5>
				<p>{findContent.desc}</p>
				<button>{findContent.btnName}</button>
			</div>
		</KickStartStyle>
	) : (
		<></>
	);
};

export default KickStart;
