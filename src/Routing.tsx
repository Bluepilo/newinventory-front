import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Dashboard from "./pages/Dashboard";
import AuthCallBack from "./pages/AuthCallBack";

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/app/dashboard" />} />
				<Route path="/app" element={<Layout />}>
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
				<Route path="/auth/callback" element={<AuthCallBack />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
