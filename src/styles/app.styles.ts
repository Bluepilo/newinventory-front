import styled from "styled-components";
import { colors } from "../utils/colors";

export const BasicDrop = styled.div<{
	$open: boolean;
	align?: "left" | "right";
}>`
	background: #fff;
	padding: 10px 20px;
	position: absolute;
	width: max-content;
	${({ align }) => (align === "right" ? "right: 0;" : "left: 0;")}
	top: calc(100% + 8px);
	opacity: ${({ $open }) => ($open ? 1 : 0)};
	transform: ${({ $open }) =>
		$open ? "translateY(0)" : "translateY(-10px)"};
	pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
	transition: opacity 0.25s ease, transform 0.25s ease;
	z-index: 999999191;
	border-radius: 10px;

	div.button {
		cursor: pointer;
		width: 100%;
		margin-bottom: 10px;
		background: #fff;
		color: #666666 !important;
		font-weight: bold;
		font-size: 0.85rem;
		border: 1px solid #d7d7d7 !important;
		outline: 0;
		border-radius: 8px;
		padding: 8px 15px;
		display: flex;
		align-items: center;
		font-family: "Urbanist", "Jost", "Lucida Sans", sans-serif;

		&:last-child {
			margin-bottom: 0px;
		}

		svg {
			margin-right: 5px;
		}

		&.active {
			border: 1px solid #0141ff !important;
			color: #0141ff !important;
		}

		&.blue {
			background: #0141ff;
			color: #fff !important;
			border: 1px solid #0141ff;
		}

		&.green {
			background: #008080;
			color: #fff !important;
			border: 1px solid #008080;
		}

		&.black {
			background: #263238;
			color: #fff !important;
			border: 1px solid #263238;
		}

		&.purple {
			background: #ef5eff;
			color: #fff !important;
			border: 1px solid #ef5eff;
		}

		&.main {
			background: rgba(0, 13, 51, 1);
			color: #fff !important;
			border: 1px solid rgba(0, 13, 51, 1);
		}
	}
`;

export const BizSelectStyle = styled.div`
	position: relative;

	.select {
		width: 130px;
		border: 2px solid #000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 0;
		border-radius: 10px;
		cursor: pointer;
		background: #fff;

		span {
			font-size: 0.8rem;
			font-weight: 600;
			margin-right: 4px;
			max-width: 80px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
`;

export const AuthCover = styled.div`
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.box {
		background-color: #000;
		padding: 20px;
		border-radius: 10px;
	}
`;

export const ProgressTrack = styled.div<{ width: number }>`
	width: 100%;
	height: 8px;
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 9999px;
	overflow: hidden;
	margin-top: 30px;

	.fill {
		width: ${(props) => props.width}%;
		background-color: #0141ff;
		height: 100%;
		transition: width 0.4s ease;
	}
`;

export const KickStartStyle = styled.div`
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;

	.content {
		width: 40%;
		text-align: center;

		img {
			height: 250px;
			margin-bottom: 20px;
		}

		h5 {
			font-weight: bold;
		}
		p {
			color: #bebebe;
		}
		button {
			background: ${colors.secondary};
			color: #fff;
			border: 0;
			outline: 0;
			padding: 15px 50px;
			border-radius: 15px;
			font-size: 0.9rem;
			font-weight: 600;
		}
	}
`;
