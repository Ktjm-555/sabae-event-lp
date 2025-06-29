import styled from "@emotion/styled";
import { DIV_container, DIV_SectionWrapper } from "../Style.ts";
import { Contents3 } from "./Contents3.tsx";
import { COLORS } from "../consts/color.ts";

export const IntroduceContents = () => {
	return (
		<DIV_IntroduceWrapper id="3">
			<SECTION_IntroduceContainer>
				{/* TODO(再考する？)：トリッキーだが、∞の文字の大きさとルビの距離が両立できないため、一旦この書き方に */}
				{/* title="さばえアクション<span><span>エイト</span><span>∞</span></span>とは" */}
				<Contents3
					title="さばえアクション<span>∞</span>(エイト)とは"
					caption="SDGsに関心のある学生でつくる「さばえSDGs部」が、若者の視点から考案した行動目標。
一人一人の小さな行動で広がり、つながり、まちの未来を大きく変えていく。そんな”∞(無限)”の願いを込めた未来へのアクションです。"
					balloonList={[]}
				/>
			</SECTION_IntroduceContainer>
		</DIV_IntroduceWrapper>
	);
};

const DIV_IntroduceWrapper = styled(DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_NORMAL_BG};
	/* セクションまたぎのpadding-top */
	padding-top: 35px;
`;

const SECTION_IntroduceContainer = styled(
	DIV_container.withComponent("section")
)``;
