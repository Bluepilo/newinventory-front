import { IoIosFlash } from "react-icons/io";
import { ProgressCountStyle } from "../../styles/nav.styles";
import { useAppSelector } from "../../redux/hooks";

const CompletionCount = () => {
	const { user } = useAppSelector((state) => state.auth);

	const calcPercent = () => {
		let shop =
			user?.business?.onboardingSteps?.shop === "completed" ? 20 : 0;
		let supplier =
			user?.business?.onboardingSteps?.supplier === "completed" ? 20 : 0;
		let product =
			user?.business?.onboardingSteps?.product === "completed" ? 20 : 0;
		let purchase =
			user?.business?.onboardingSteps?.purchase === "completed" ? 20 : 0;

		let sales =
			user?.business?.onboardingSteps?.sales === "completed" ? 20 : 0;

		return shop + supplier + product + purchase + sales;
	};

	return calcPercent() < 100 ? (
		<ProgressCountStyle
			onClick={() => console.log("")}
			color={
				calcPercent() >= 60
					? "#505BDA"
					: calcPercent() >= 40
					? "#FF9800"
					: "#F44336"
			}
		>
			<IoIosFlash size={20} />
			<span>{calcPercent()}% Setup</span>
		</ProgressCountStyle>
	) : (
		<></>
	);
};

export default CompletionCount;
