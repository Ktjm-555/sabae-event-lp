import styled from "@emotion/styled";
import { DIV_container, DIV_SectionWrapper } from "../Style.ts";
import { Contents3 } from "./Contents3.tsx";

export const IntroduceContents = () => {
	return (
		<DIV_IntroduceWrapper>
			<SECTION_IntroduceContainer>
				<Contents3
					title="さばえアクション∞とは"
					caption="SDGsに関心のある学生でつくる「さばえSDGs部」が、若者の視点から考案した行動目標。<br>
一人一人の小さな行動で広がり、つながり、まちの未来を大きく変えていく。そんな”∞(無限)”の願いを込めた未来へのアクションです。"
					balloonList={[]}
				/>
				{/* <Contents2
					title="スペシャルステージ"
					caption="トーク×ファッション×ダンス！ここでしか味わえないパフォーマンスで盛り上がろう！"
					annotation="※タイムスケジュールは、すべての出演ゲストが出揃い次第発表させていただきます。"
					hasBalloon={false}
				/> */}
			</SECTION_IntroduceContainer>
		</DIV_IntroduceWrapper>
	);
};

const DIV_IntroduceWrapper = styled(DIV_SectionWrapper)`
	background-color: #fff;
	/* セクションまたぎのpadding-top */
	padding-top: 35px;
`;

const SECTION_IntroduceContainer = styled(
	DIV_container.withComponent("section")
)`
	/* display: flex;
	align-items: center; */
`;

const P_Subtitle = styled.p`
	font-weight: 500;
	font-size: 24px;
`;

const DIV_ContentsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
	grid-auto-rows: 1fr;
	margin-bottom: 70px;

	@media (max-width: 900px) {
		margin-bottom: 40px;
	}

	@media (max-width: 800px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}

	@media (max-width: 500px) {
		margin-bottom: 20px;
	}
`;
