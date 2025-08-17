import styled from "@emotion/styled";
import {
	S_DIV_CardContainer,
	S_DIV_CardHeaderContainer,
	S_DIV_SectionWrapper,
	S_H2_Title,
	S_P_Description,
	S_P_Subtitle,
} from "../../Style";
import { Button } from "../ui/Button";
import { ContentsTitleOnly } from "./CotentsTitleOnly";

export const Contents5 = () => {
	const goToKoroKoroPage = () => {
		window.open(
			"https://www.city.sabae.fukui.jp/event/koza/korokoro.html",
			"_blank"
		);
	};

	const goToSabaeruPage = () => {
		window.open("https://www.instagram.com/sabaeru_official/", "_blank");
	};
	return (
		<DIV_SectionWrapper>
			<S_P_Subtitle>
				めがねのまちさばえSDGsフェス/めがねフェス/さばえ門前まつり
			</S_P_Subtitle>
			<ContentsTitleOnly
				title="さばえ３大フェス同時開催関連イベント"
				balloonList={[]}
			/>
			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<P_Subtitle>さばえ3大フェス 市制70周年記念イベント</P_Subtitle>
					<S_DIV_CardHeaderContainer>
						<H2_Title>
							コロコロコミック
							<br className="display" />
							コラボクイズスタンプラリー
						</H2_Title>
					</S_DIV_CardHeaderContainer>
					<DIV_Container>
						<div>
							<P_Description>
								「めがねのまちさばえSDGsフェス」「めがねフェス」「さばえ門前まつり」などでなぞを解いてスタンプを集め、豪華景品が当たるカプセルマシンを回そう！
							</P_Description>
							<DIV_ButtonContainer_PC>
								<Button onClick={goToKoroKoroPage}>詳しくはこちら</Button>
							</DIV_ButtonContainer_PC>
						</div>

						<img
							src={`${import.meta.env.BASE_URL}images/image_korokoro.png`}
							srcSet={`
								${import.meta.env.BASE_URL}images/image_korokoro.png 1x,
								${import.meta.env.BASE_URL}images/image_korokoro_2x.png 2x
							`}
							alt="コロコロコミックの表紙"
						/>
					</DIV_Container>
					<DIV_ButtonContainer_SP>
						<Button onClick={goToKoroKoroPage}>詳しくはこちら</Button>
					</DIV_ButtonContainer_SP>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<S_DIV_CardHeaderContainer>
						{/* 上のサブタイトルない時に使用する */}
						<DIV_CardTitleWrapper>
							<H2_Title>さばえるキャンペーン</H2_Title>
						</DIV_CardTitleWrapper>
					</S_DIV_CardHeaderContainer>

					<DIV_Container>
						<div>
							<P_Description>
								フォローといいねで応募完了！
								<br />
								人気ゲーム機や鯖江産豪華景品が多数当たる！
								<br />
								「さばえ３大フェスきねてキャンペーン」を、8月5日(火)から9月21日(日)まで開催します。
							</P_Description>
							<DIV_ButtonContainer_PC>
								<Button onClick={goToSabaeruPage}>詳しくはこちら</Button>
							</DIV_ButtonContainer_PC>
						</div>

						<img
							src={`${import.meta.env.BASE_URL}images/image_sabaeru.png`}
							srcSet={`
								${import.meta.env.BASE_URL}images/image_sabaeru.png 1x,
								${import.meta.env.BASE_URL}images/image_sabaeru_2x.png 2x
							`}
							alt="さばえるキャンペーン画像"
						/>
					</DIV_Container>
					<DIV_ButtonContainer_SP>
						<Button onClick={goToSabaeruPage}>詳しくはこちら</Button>
					</DIV_ButtonContainer_SP>
				</SECTION_CardContainer>
			</DIV_CardsWrapper>
		</DIV_SectionWrapper>
	);
};

const SECTION_CardContainer = styled(
	S_DIV_CardContainer.withComponent("section")
)`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	grid-auto-rows: 1fr;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
	}
`;

const H2_Title = styled(S_H2_Title)`
	font-size: 22px;

	br.display {
		display: none;
	}

	@media (max-width: 1180px) and (min-width: 1160px) {
		br.display {
			display: block;
		}
	}

	@media (max-width: 850px) and (min-width: 801px) {
		br.display {
			display: block;
		}
	}
`;

const P_Subtitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 5px;
	font-family: "M PLUS 1", sans-serif;

	/* 下のカードコンポのH2_Titleに大きさと連動して変更する */
	@media (max-width: 1160px) {
		font-size: 14px;
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1040px) {
		font-size: 12px;
	}
`;

const DIV_Container = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 30px;
	margin-bottom: 10px;
	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
`;

const DIV_SectionWrapper = styled(S_DIV_SectionWrapper)`
	padding-bottom: 0px;
	@media (max-width: 900px) {
		padding-bottom: 0px;
	}
`;

const DIV_CardTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// コロコロとタイトルの高さを合わせる
	height: 75px;

	@media (max-width: 1180px) and (min-width: 1160px) {
		height: 112px;
	}

	@media (max-width: 1159px) and (min-width: 1140px) {
		height: 61px;
	}

	@media (max-width: 1140px) {
		height: 55px;
	}

	@media (max-width: 850px) and (min-width: 801px) {
		height: 81px;
	}
`;

const P_Description = styled(S_P_Description)`
	@media (max-width: 1200px) {
		margin-bottom: 10px;
	}
`;

const DIV_ButtonContainer_PC = styled.div`
	@media (max-width: 1200px) {
		display: none;
	}
`;

const DIV_ButtonContainer_SP = styled.div`
	display: none;

	@media (max-width: 1200px) {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}
`;
