import styled from "@emotion/styled";
import { COLORS } from "./consts/color";
import { css } from "@emotion/react";

export const DIV_container = styled.div`
	max-width: 1400px;

	padding: 0 70px;
	margin: 0 auto;

	@media (max-width: 1020px) {
		padding: 0 30px;
	}

	@media (max-width: 800px) {
		padding: 0 15px;
	}
`;

export const DIV_SectionWrapper = styled.div`
	background-color: ${COLORS.EVENT};
	width: 100%;
	padding-bottom: 60px;
`;

export const DIV_CardContainer = styled.div`
	background-color: #fff;
	box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	padding: 20px;
	color: ${COLORS.TEXT};
`;

export const P_Subtitle = styled.p`
	font-family: "M PLUS 1", sans-serif;
	color: ${COLORS.TITLE};
	font-size: 24px;
	font-weight: 500;

	@media (max-width: 900px) {
		font-size: 20px;
	}

	@media (max-width: 800px) {
		font-size: 16px;
	}
`;

export const Styled_P_LargeBold = css`
	font-size: 24px;
	font-weight: bold;
`;
