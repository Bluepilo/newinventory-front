import React from "react";
import { useAppSelector } from "../redux/hooks";
import KickStart from "./KickStart";

const AppGuard = ({
	page,
	children,
	subPage,
}: {
	page: "sales" | "expense" | "product" | "purchase";
	children: React.ReactNode;
	subPage?: "customers";
}) => {
	const { user } = useAppSelector((state) => state.auth);

	return user.business?.onboardingSteps[page] === "completed" ? (
		<div>{children}</div>
	) : (
		<KickStart page={subPage || page} subPage={subPage} />
	);
};

export default AppGuard;
