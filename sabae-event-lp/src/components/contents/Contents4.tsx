import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { CardTitle } from "../ui/CardTitle";
import {
	S_DIV_CardContainer,
	S_DIV_SectionWrapper,
	S_P_Description,
	S_P_Subtitle,
} from "../../Style";
import { Button } from "../ui/Button";
import { ContentsTitleOnly } from "./CotentsTitleOnly";

type Props = {
	title: string;
	caption?: string;
	balloonList: Array<string>;
	annotation?: string;
};

export const Contents4 = ({ title, balloonList, annotation }: Props) => {
	const goToSabaeEightPage = () => {
		window.open("https://meganefes.com/", "_blank");
	};

	const goToKoroKoroPage = () => {
		window.open(
			"https://www.city.sabae.fukui.jp/event/koza/korokoro.html",
			"_blank"
		);
	};
	return (
		<DIV_SectionWrapper>
			<S_P_Subtitle>同時開催</S_P_Subtitle>
			<ContentsTitleOnly title={title} balloonList={[]} />

			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<CardTitle title="さばえ門前まつり" />
					<P_Description>
						「さばえの歴史と文化を伝えるフェス」をテーマに、江戸時代、間部家の門前町として栄えたまちなかを空間演出し、鯖江市の歴史・伝統・文化の魅力を見て、知って、体感できるまつりです。
					</P_Description>
					<DIV_Spacer />
					<DIV_IconContainer>
						<A_Icon
							href="https://www.instagram.com/sabaemonzenmatsuri/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IMG_Icon
								src={`${import.meta.env.BASE_URL}icon/instagram.svg`}
								alt="さばえ門前まつりのinstagramのアイコン"
							/>
						</A_Icon>
						<A_Icon
							href="https://www.facebook.com/profile.php?id=61560310619817"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IMG_Icon
								src={`${import.meta.env.BASE_URL}icon/facebook.svg`}
								alt="さばえ門前まつりのfacebookのアイコン"
							/>
						</A_Icon>
					</DIV_IconContainer>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<CardTitle title="めがねフェス" />
					<P_Description>
						「めがねよ、ありがとう」を合言葉に、全国からめがね好きが集まるめがねの感謝祭。めがね供養をはじめ、めがねの製造工程をユニークに展示・体験する「メガ展」、産地の最新めがねなどの販売、ステージ、グルメまで、めがねづくしのイベントです。
					</P_Description>
					<DIV_Spacer />
					<DIV_CardFooter>
						<Button onClick={goToSabaeEightPage}>公式サイト</Button>
						<div>
							<A_Icon
								href="https://x.com/meganefes"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/twitter-x.svg`}
									alt="めがねフェスのtwitter-xのアイコン"
								/>
							</A_Icon>
							<A_Icon
								href="https://www.instagram.com/meganefes/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/instagram.svg`}
									alt="めがねフェスのinstagramのアイコン"
								/>
							</A_Icon>
							<A_Icon
								href="https://www.facebook.com/meganefes"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/facebook.svg`}
									alt="めがねフェスのfacebookのアイコン"
								/>
							</A_Icon>
							<A_Icon
								href="https://m.youtube.com/channel/UCDwHawMHi7yeLzSSof8bvDQ"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/youtube.svg`}
									alt="めがねフェスのYoutubeのアイコン"
								/>
							</A_Icon>
						</div>
					</DIV_CardFooter>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<P_Subtitle>さばえ3大フェス 市制70周年記念イベント</P_Subtitle>
					<CardTitle
						title={`コロコロコミック コラボ<br />クイズスタンプラリー`}
					/>
					<DIV_Container>
						<P_Description_gapNone>
							「めがねのまちさばえSDGsフェス」「めがねフェス」「さばえ門前まつり」などでなぞを解いてスタンプを集め、豪華景品が当たるカプセルマシンを回そう！
						</P_Description_gapNone>
						<IMG_Pc
							src={`${import.meta.env.BASE_URL}images/image_korokoro.png`}
							srcSet={`
								${import.meta.env.BASE_URL}images/image_korokoro.png 1x,
								${import.meta.env.BASE_URL}images/image_korokoro_2x.png 2x
							`}
							alt="コロコロコミックの表紙"
						/>
					</DIV_Container>

					<DIV_CardFooter>
						<Button onClick={goToKoroKoroPage}>詳しくはこちら</Button>
						<img
							src={`${import.meta.env.BASE_URL}logo/comic_logo.svg`}
							alt="コロコロコミックのロゴ"
						/>
					</DIV_CardFooter>
				</SECTION_CardContainer>
			</DIV_CardsWrapper>
		</DIV_SectionWrapper>
	);
};
const DIV_Spacer = styled.div`
	flex-grow: 1;
`;

const SECTION_CardContainer = styled(
	S_DIV_CardContainer.withComponent("section")
)`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	grid-auto-rows: 1fr;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
	}
`;

const DIV_CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* position: absolute;
	bottom: 10px;
	left: 20px;
	right: 20px; */

	/* ここだけレスポンシブ例外対応(A)() */
	@media (max-width: 1210px) and (min-width: 1201px) {
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
		gap: 20px;
		margin-top: 20px;
	}
`;

const DIV_IconContainer = styled.div`
	margin-left: auto;
`;

/* ここだけレスポンシブ例外対応(A) */
/* TODO：継承していない。変数名おかしい */
// const DIV_IconContainer_underButton = styled.div`
// 	@media (max-width: 1210px) and (min-width: 901px) {
// 		margin-top: 15px;
// 	}
// `;

const IMG_Pc = styled.img``;

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
	gap: 10px;
	margin-bottom: 10px;
	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
		gap: 10px;

		img {
			width: 200px;
		}
	}
`;

const IMG_Icon = styled.img`
	width: 32px;
	height: 32px;
`;

const A_Icon = styled.a`
	display: inline-block;
	margin-left: 8px;

	&:hover {
		opacity: 0.6;
	}
`;

const P_Description = styled(S_P_Description)`
	margin-bottom: 20px;
`;

const P_Description_gapNone = styled(S_P_Description)`
	margin-bottom: 0px;

	@media (max-width: 500px) {
		font-size: 14px;
		margin-bottom: 0px;
	}
`;

const DIV_SectionWrapper = styled(S_DIV_SectionWrapper)`
	padding-bottom: 0px;
	@media (max-width: 900px) {
		padding-bottom: 0px;
	}
`;
