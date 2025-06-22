import styled from "@emotion/styled";
import { COLORS } from "../consts/color.ts";
import { DIV_container, DIV_SectionWrapper, P_Subtitle } from "../Style.ts";
import { Contents } from "./Contents.tsx";
import { Contents2 } from "./Contents2.tsx";

export const EventContents = () => {
	return (
		<DIV_EventWrapper>
			<SECTION_EventContainer>
				<P_DescText>
					SDGsの目標達成に向け、市民一人一人が自分ごととして行動するきっかけづくりのためのイベントです。
					<br />
					今回は、若者視点で考案した行動目標「さばえアクション∞(エイト)」をとおし、知って、遊んで、楽しめるフェスを目指します。
				</P_DescText>
				<P_Subtitle>体験&販売</P_Subtitle>
				<DIV_ContentsContainer>
					<Contents
						title="パーク探検！クイズラリー"
						caption="SDGsに取り組むさまざまな企業・団体などが大集合！家族で楽しめるブースがいっぱい！！"
						imgSrc="images/contents_image.png"
						balloonList={["9/20", "土", "9/21", "日"]}
					/>
					<Contents
						title="わくわくサステナブース"
						caption="ブースを巡ってクイズにチャレンジ！スタンプを集めて豪華賞品をゲットしよう！"
						imgSrc="images/contents_image2.png"
						balloonList={[]}
					/>
				</DIV_ContentsContainer>
				<Contents2
					title="スペシャルステージ"
					caption="トーク×ファッション×ダンス！ここでしか味わえないパフォーマンスで盛り上がろう！"
					annotation="※タイムスケジュールは、すべての出演ゲストが出揃い次第発表させていただきます。"
					balloonList={["9/20", "土"]}
				/>
			</SECTION_EventContainer>
		</DIV_EventWrapper>
	);
};

const DIV_EventWrapper = styled(DIV_SectionWrapper)`
	padding-top: 150px;
	margin-top: -80px;
`;

const SECTION_EventContainer = styled(DIV_container.withComponent("section"))``;

const P_DescText = styled.p`
	color: ${COLORS.TEXT};
	font-weight: 500;
	font-size: 24px;
	margin-bottom: 70px;
	font-family: "M PLUS 1", sans-serif;

	@media (max-width: 900px) {
		font-size: 20px;
		margin-bottom: 40px;
	}

	@media (max-width: 500px) {
		font-size: 16px;
		margin-bottom: 20px;
	}
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

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 800px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}

	@media (max-width: 500px) {
		margin-bottom: 20px;
	}
`;
