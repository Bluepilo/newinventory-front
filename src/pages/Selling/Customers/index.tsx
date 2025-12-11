import AppGuard from "../../../component/AppGuard";

const Customers = () => {
	return (
		<AppGuard page="sales" subPage="customers">
			<div></div>
		</AppGuard>
	);
};

export default Customers;
