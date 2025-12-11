import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import AuthCallBack from "./pages/AuthCallBack";
import Selling from "./pages/Selling";
import Customers from "./pages/Selling/Customers";

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/app/dashboard" />} />
				<Route path="/app" element={<Layout />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="selling/list" element={<Selling />} />
					<Route path="selling/customers" element={<Customers />} />
					<Route path="selling/returns" element={<Dashboard />} />
					<Route path="buying/list" element={<Dashboard />} />
					<Route path="buying/suppliers" element={<Dashboard />} />
					<Route path="buying/returns" element={<Dashboard />} />
					<Route path="product/catalogue" element={<Dashboard />} />
					<Route path="product/stocks" element={<Dashboard />} />
					<Route
						path="product/non-inventory"
						element={<Dashboard />}
					/>
					<Route path="product/price-setup" element={<Dashboard />} />
					<Route path="transfer" element={<Dashboard />} />
					<Route path="expense" element={<Dashboard />} />
					<Route path="report" element={<Dashboard />} />
				</Route>
				<Route path="/auth/callback" element={<AuthCallBack />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
