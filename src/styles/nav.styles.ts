import styled from "styled-components";
import { colors } from "../utils/colors";

export const PageStyle = styled.div`
	height: 100vh;
	overflow: hidden;
`;

export const PageContent = styled.div<{ minimized: string }>`
	position: relative;
	margin-left: ${(props) => (props.minimized === "true" ? "70px" : "180px")};
	height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	@media (max-width: 991px) {
		margin-left: 0;
	}

	.content-page {
		padding: 25px 2%;
		flex: 1;
		min-height: 0;
		overflow-y: auto;
		background: #fff;

		@media (max-width: 991px) {
			padding: 20px 4%;
		}
	}
`;

export const SidebarDiv = styled.div<{ minimize: string }>`
	width: ${(props) => (props.minimize === "true" ? "70px" : "180px")};
	background: ${colors.main};
	height: 100vh;
	position: fixed;
	z-index: 1029;
	transition: all 0.3s ease-in-out;
	padding: 10px;
	overflow: hidden;

	.logo {
		text-align: center;
		padding: 5px 0;
		img {
			height: 45px;
		}
	}

	.side-bottom {
		position: absolute;
		bottom: 5px;
		right: 10px;
		left: 10px;
		text-align: end;
		padding: ${(props) => (props.minimize === "true" ? "0px" : "10px")};
		border-radius: 5px;

		button {
			border: 0;
			outline: 0;
			background: #fff;
			border-radius: 5px;
			padding: 6px 12px;
		}
	}
`;

export const MenuBoard = styled.div<{ minimized: boolean }>`
	height: 100%;
	padding-bottom: 50px;
	padding-top: 20px;

	&:hover {
		overflow-y: auto;
	}

	a.menu {
		width: 100%;
		display: flex;
		margin-bottom: 8px;
		text-decoration: none;
		text-transform: capitalize;
		align-items: center;
		color: #fff;
		padding: 8px 0px;
		padding-left: 10px;
		border-radius: 10px;
		font-size: 0.95rem;
		position: relative;

		svg {
			position: absolute;
			right: 0;
			display: ${(props) => (props.minimized ? "none" : "inline")};
		}

		.box {
			border-color: #fff;
			border-style: solid;
			border-width: ${(props) => (props.minimized ? "1.5px" : "0px")};
			height: ${(props) => (props.minimized ? "38px" : "35px")};
			width: ${(props) => (props.minimized ? "38px" : "35px")};
			border-radius: 10px;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				height: 20px;
				width: 20px;
			}
		}

		span {
			margin-left: 10px;
			display: ${(props) => (props.minimized ? "none" : "inline")};
			font-weight: 600;
		}

		&.active {
			background: ${(props) =>
				props.minimized ? "inherit" : `${colors.secondary}`};
			color: #fff;

			.box {
				border-width: ${(props) => (props.minimized ? "1px" : "0px")};
				background: ${colors.secondary};
			}
		}
	}
`;

export const NavHeaderStyles = styled.div<{ minimize: string }>`
	background-color: ${colors.main};
	left: ${(props) => (props.minimize == "true" ? "70px" : "180px")};
	padding: 12px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all 0.3s ease-in-out;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 9991;

	.biz {
		display: flex;
		align-items: center;
	}

	@media (max-width: 991px) {
		left: 0;
	}

	.menus,
	.menu-mobile {
		display: flex;
		align-items: center;

		button.nav-btn {
			margin-left: 15px;
			background-color: transparent;
			height: 35px;
			width: 35px;
			border-radius: 50%;
			outline: 0;
			border: 0.5px solid #fff;
			font-size: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
		}
		div.plus {
			border-right: 1px solid #fff;
			border-left: 1px solid #fff;
			padding: 0 15px;
			button {
				margin: 0 !important;
			}
		}
	}

	.menus {
		@media (max-width: 991px) {
			display: none;
		}
	}

	.menu-mobile {
		@media (min-width: 991px) {
			display: none;
		}
	}
`;
