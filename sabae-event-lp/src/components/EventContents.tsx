import styled from "@emotion/styled";
import {
	S_SECTION_container,
	S_DIV_SectionWrapper,
	S_P_Subtitle,
	S_P_LargeDesc,
} from "../Style.ts";
import { Contents } from "./contents/Contents.tsx";
import { Contents2 } from "./contents/Contents2.tsx";
import { NewsContents } from "./contents/NewsContents.tsx";

export const EventContents = () => {
	return (
		<DIV_EventWrapper>
			<S_SECTION_container>
				<S_P_LargeDesc>
					SDGsの目標達成に向け、市民一人一人が自分ごととして行動するきっかけづくりのためのイベントです。
					<br />
					今回は、若者視点で考案した行動目標「さばえアクション∞(エイト)」をとおし、知って、遊んで、楽しめるフェスを目指します。
				</S_P_LargeDesc>
				<NewsContents />
				<S_P_Subtitle>体験&販売</S_P_Subtitle>
				<DIV_ContentsContainer>
					<Contents
						title="わくわくサステナブース"
						caption="SDGsに取り組むさまざまな企業・団体などが大集合！家族で楽しめるブースがいっぱい！！"
						imgSrc={`${import.meta.env.BASE_URL}images/photo_try&buy_01.png`}
						balloonList={["9/20", "土", "9/21", "日"]}
					/>
					<Contents
						title="パーク探検！クイズラリー"
						caption="ブースを巡ってクイズにチャレンジ！スタンプを集めて豪華賞品をゲットしよう！"
						imgSrc={`${import.meta.env.BASE_URL}images/photo_try&buy_02.png`}
						balloonList={[]}
					/>
				</DIV_ContentsContainer>
				<Contents2
					title="スペシャルステージ"
					caption="トーク×ファッション×ダンス！ここでしか味わえないパフォーマンスで盛り上がろう！"
					annotation="※タイムスケジュールは、すべての出演ゲストが出揃い次第発表させていただきます。"
					balloonList={["9/20", "土"]}
				/>
			</S_SECTION_container>
		</DIV_EventWrapper>
	);
};

const DIV_EventWrapper = styled(S_DIV_SectionWrapper)`
	padding-top: 150px;
	margin-top: -100px;
	padding-bottom: 30px;
	@media (max-width: 900px) {
		margin-top: -130px;
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
