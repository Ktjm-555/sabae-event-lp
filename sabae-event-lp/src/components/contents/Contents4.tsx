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

type Props = {
	title: string;
	caption?: string;
	balloonList: Array<string>;
	annotation?: string;
};

const goToSabaeEightPage = () => {
	window.open("https://meganefes.com/", "_blank");
};

export const Contents4 = ({ title, balloonList, annotation }: Props) => {
	return (
		<DIV_SectionWrapper>
			<S_P_Subtitle>同時開催</S_P_Subtitle>
			<ContentsTitle
				title={title}
				balloonList={balloonList}
				annotation={annotation}
			/>
			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<CardTitle title="さばえ門前まつり" />
					<P_Description>
						「さばえの歴史と文化を伝えるフェス」をテーマに、江戸時代、間部家の門前町として栄えたまちなかを空間演出し、鯖江市の歴史・伝統・文化の魅力を見て、知って、体感できるまつりです。
					</P_Description>
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
					<DIV_CardFooter>
						<Button onClick={goToSabaeEightPage}>公式サイト</Button>
						<DIV_IconContainer_underButton>
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
						</DIV_IconContainer_underButton>
					</DIV_CardFooter>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<P_Subtitle>さばえ3大フェス 市制70周年記念イベント</P_Subtitle>
					<CardTitle
						title={`コロコロコミック コラボ\nなぞときスタンプラリー`}
					/>
					<P_Description_gapNone>
						さばえ3大フェス会場などに「なぞときスポット」を設置します。各スポットで出題されるクイズに回答し、スタンプを集めましょう。
						スタンプを集めると、豪華景品が当たるカプセルマシンを回せるチャンス！
					</P_Description_gapNone>
					<DIV_Image>
						<img
							src={`${import.meta.env.BASE_URL}logo/comic_logo.svg`}
							alt="コロコロコミックのロゴ"
						/>
					</DIV_Image>
				</SECTION_CardContainer>
			</DIV_CardsWrapper>
		</DIV_SectionWrapper>
	);
};

const SECTION_CardContainer = styled(
	S_DIV_CardContainer.withComponent("section")
)`
	position: relative;
`;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	grid-auto-rows: 1fr;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const DIV_CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 20px;

	/* ここだけレスポンシブ例外対応(A)() */
	@media (max-width: 1210px) and (min-width: 901px) {
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
	}
`;

const DIV_IconContainer = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
`;

/* ここだけレスポンシブ例外対応(A) */
/* TODO：継承していない。変数名おかしい */
const DIV_IconContainer_underButton = styled.div`
	@media (max-width: 1210px) and (min-width: 901px) {
		margin-top: 15px;
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

const DIV_Image = styled.div`
	display: flex;
	justify-content: flex-end;
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
