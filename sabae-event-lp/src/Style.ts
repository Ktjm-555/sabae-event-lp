import styled from "@emotion/styled";
import { COLORS } from "./consts/color";

export const DIV_container = styled.div`
	max-width: 1400px;

	padding: 0 70px;
	margin: 0 auto;
	font-family: "M PLUS 1", sans-serif;

	@media (max-width: 1000px) {
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
	padding: 25px;
	color: ${COLORS.TEXT};
`;
