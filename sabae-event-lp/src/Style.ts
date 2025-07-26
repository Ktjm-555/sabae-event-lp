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
	background-color: ${COLORS.SEC_GRAY_BG};
	width: 100%;
	padding-top: 50px;
	padding-bottom: 60px;

	@media (max-width: 900px) {
		padding-top: 40px;
		padding-bottom: 40px;
	}
	@media (max-width: 500px) {
		padding-top: 30px;
		padding-bottom: 30px;
	}
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

export const S_H2_Title = styled.h2`
	font-family: "Noto Sans", sans-serif;
	font-size: 24px;
	font-weight: bold;
	.sp-only {
		display: none;
	}

	.english {
		font-size: 20px;
		font-weight: 500;
	}

	/* ここ修正時：S_P_Subtitleがある場合はそれも直す必要あり！ */
	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1160px) {
		font-size: 18px;

		.english {
			font-size: 16px;
		}
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1040px) {
		font-size: 16px;

		.english {
			font-size: 14px;
		}
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 540px) {
		.sp-only {
			display: block;
		}
	}
`;

export const S_DIV_DisplayContainer = styled.div`
	display: flex;
	gap: 20px;
`;
