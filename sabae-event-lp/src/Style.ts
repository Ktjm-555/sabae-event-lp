/*
 * Styledコンポーネント化したい場合は本ファイルに格納する。
 * タグ関係なく自由につけたいものは、typography.tsへ
 */

import styled from "@emotion/styled";
import { COLORS } from "./consts/color";
import { TEXT_L } from "./consts/typography";

export const S_SECTION_container = styled.section`
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

export const S_DIV_SectionWrapper = styled.div`
	background-color: ${COLORS.SEC_YELLOW_BG};
	width: 100%;
	padding-top: 35px;
	padding-bottom: 60px;
`;

export const S_DIV_CardContainer = styled.div`
	background-color: ${COLORS.CARD_BG};
	box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	padding: 20px;
	color: ${COLORS.TEXT};
`;

export const S_P_Subtitle = styled.p`
	${TEXT_L}
	color: ${COLORS.TITLE};
`;

export const S_P_LargeDesc = styled.p`
	${TEXT_L}
	margin-bottom: 70px;

	@media (max-width: 900px) {
		margin-bottom: 40px;
	}

	@media (max-width: 500px) {
		margin-bottom: 20px;
	}
`;

export const S_P_Description = styled.p`
	margin-bottom: 40px;

	@media (max-width: 500px) {
		font-size: 14px;
		margin-bottom: 20px;
	}
`;
