import { ProgressTrack } from "../styles/app.styles";

const ProgressBar = ({ value }: { value: number }) => {
	return (
		<ProgressTrack width={value}>
			<div className="fill" />
		</ProgressTrack>
	);
};

export default ProgressBar;
