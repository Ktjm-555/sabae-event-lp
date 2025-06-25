import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { CardTitle } from "./CardTitle";
import { DIV_CardContainer, P_Subtitle } from "../Style";
import { Button } from "./Button";

type Props = {
	title: string;
	caption?: string;
	balloonList: Array<string>;
	annotation?: string;
};

export const Contents2 = ({
	title,
	caption,
	balloonList,
	annotation,
}: Props) => {
	const goToSabaeModelPage = () => {
		window.open("https://www.sabae-sdgs.jp/news/2120/", "_blank");
	};

	return (
		<div>
			<P_Subtitle id="2">めがねのまちさばえ応援プロジェクト</P_Subtitle>
			<ContentsTitle
				title={title}
				caption={caption}
				balloonList={balloonList}
				annotation={annotation}
			/>
			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<CardTitle
						title={`“さばえアクション∞（エイト）”\nコレクション produced by TGC`}
						label="出演ゲスト"
						labelNum={1}
					/>
					<DIV_Guest>
						<div>
							<DIV_Image>
								<IMG_Image
									src="images/contents2_image3.png"
									alt="くれいじーまぐねっとの画像"
								/>
							</DIV_Image>
							<p>くれいじーまぐねっと[メインMC]</p>
						</div>
					</DIV_Guest>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<CardTitle
						title="LDH ダンスワークショップショー"
						label="出演ゲスト"
						labelNum={2}
					/>
					<DIV_GuestContainer>
						<div>
							<DIV_Image>
								<IMG_Image
									src="images/tetsuyasan.png"
									alt="EXILE TETSUYAの画像"
								/>
							</DIV_Image>
							<p>EXILE TETSUYA</p>
						</div>
						<div>
							<DIV_Image>
								<IMG_Image
									src="images/iwatanisan.png"
									alt="岩谷翔吾（THE RAMPAGE）の画像"
								/>
							</DIV_Image>
							<p>岩谷翔吾（THE RAMPAGE）</p>
						</div>
					</DIV_GuestContainer>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<CardTitle
						title="繊維産業×福井文化服装学院コラボ"
						label="ステージ企画"
						labelNum={1}
					/>
					<P_Description>
						鯖江市内繊維産業から排出される繊維端材を用いて、学生の自由な発想と創造性でサステナブルアクセサリーを製作！「“さばえアクション∞(エイト)”コレクション
						produced by TGC」でモデルが着用します。
					</P_Description>
					<DIV_ImageContainer>
						<img src="images/senni_hukui.png" />
						<img src="images/senni_hukui2.png" />
					</DIV_ImageContainer>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<CardTitle
						title="キッズモデルコラボ"
						label="ステージ企画"
						labelNum={2}
					/>
					<P_Description>
						子どもたちにSDGsを体感し、トップモデルとの共演による感動体験を味わってもらうことを目的に、昨年に引き続き、キッズモデルコラボステージを実施します。
					</P_Description>
					<DIV_NoticeSection>
						<h4>キッズモデル募集</h4>
						<UL_Notice>
							<li>・募集開始：2025年6月26日(木)～</li>
							<li>・対象年齢：年長児～小学３年生</li>
							<li>・募集要件：SDGsを表現したファッションを着用すること 他</li>
						</UL_Notice>
						<SPAN_Notice>
							※詳細・ご応募は、さばえSDGs推進センターHPまで
						</SPAN_Notice>
						<Button onClick={goToSabaeModelPage}>ご応募はこちら</Button>
					</DIV_NoticeSection>
				</SECTION_CardContainer>
			</DIV_CardsWrapper>
		</div>
	);
};

const SECTION_CardContainer = styled(
	DIV_CardContainer.withComponent("section")
)``;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	grid-auto-rows: 1fr;

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 800px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}
`;

const DIV_GuestContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;

	@media (max-width: 500px) {
		display: block;

		/* 子要素の下に余白をつける（最後の要素は除く） */
		> div {
			margin-bottom: 20px;
		}

		/* 最後の要素は余白なしにする */
		> div:last-of-type {
			margin-bottom: 0;
		}
	}
`;

const DIV_Image = styled.div`
	width: 100%;
	overflow: hidden;
`;

const IMG_Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const DIV_Guest = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 500px) {
		div {
			width: 100%;
		}
	}
`;

const P_Description = styled.p`
	margin-bottom: 40px;

	@media (max-width: 500px) {
		font-size: 14px;
		margin-bottom: 20px;
	}
`;

const DIV_NoticeSection = styled.div`
	background-color: #fdede2;
	padding: 15px;
`;

const UL_Notice = styled.ul`
	@media (max-width: 500px) {
		font-size: 14px;
	}
`;

const SPAN_Notice = styled.span`
	display: block;
	font-size: 14px;
	/* 要素外側のpaddingに合わせている */
	margin-bottom: 15px;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`;

const DIV_ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;

	img {
		width: 100%;
		overflow: hidden;
	}

	@media (max-width: 500px) {
		display: block;

		/* 縦並び時に余白をつける */
		img {
			margin-bottom: 20px;
		}

		/* 最後の要素は余白なしにする */
		img:last-of-type {
			margin-bottom: 0;
		}
	}
`;
