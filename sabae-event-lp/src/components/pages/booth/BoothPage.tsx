import styled from "@emotion/styled";
import { S_DIV_SectionWrapper, S_SECTION_container } from "../../../Style";
import { COLORS } from "../../../consts/color";
import { ContentsTitleOnly } from "../../contents/CotentsTitleOnly";
import { partners, sabaeStudents } from "../../../items/booth";
import { BoothCards } from "../../contents/BoothCards";

export const BoothPage = () => {
	return (
		<DIV_SectionWrapper>
			{/* わくわくサステナブース */}
			<S_SECTION_container>
				<DIV_TitleWrapper>
					<ContentsTitleOnly
						title={"わくわくサステナブース"}
						balloonList={["9/20", "土", "9/21", "日"]}
					/>
				</DIV_TitleWrapper>

				{/* 鯖江高校生ブース */}
				<DIV_Contents>
					<H2_Title>鯖江高校生ブース</H2_Title>
					<BoothCards items={sabaeStudents} />
				</DIV_Contents>

				{/* 企業･団体パートナーズブース */}
				<H2_Title>企業･団体パートナーズブース</H2_Title>
				<BoothCards items={partners} />
			</S_SECTION_container>
		</DIV_SectionWrapper>
	);
};

const DIV_SectionWrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_YELLOW_BG};
	padding-top: 140px;

	@media (max-width: 900px) {
		padding-top: 120px;
	}
`;

// 大元タイトルの下のタイトルにつける
const DIV_TitleWrapper = styled.div`
	margin-bottom: 30px;
`;

// S_H2_Titleは継承しない
const H2_Title = styled.h2`
	font-family: "Noto Sans", sans-serif;
	font-size: 26px;
	padding-bottom: 10px;
	border-bottom: 1px solid ${COLORS.BORDER};
	margin-bottom: 20px;

	@media (max-width: 1160px) {
		font-size: 26px;
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1040px) {
		font-size: 26px;
	}

	@media (max-width: 500px) {
		font-size: 20px;
	}
`;

const DIV_Contents = styled.div`
	margin-bottom: 35px;
`;
