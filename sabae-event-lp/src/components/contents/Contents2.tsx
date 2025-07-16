import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { CardTitle } from "../ui/CardTitle";
import {
	S_P_Description,
	S_DIV_CardContainer,
	S_P_Subtitle,
} from "../../Style";
import { Button } from "../ui/Button";
import { COLORS } from "../../consts/color";

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

	const guests1 = [
		{
			name: `くれいじーまぐねっと<br class="sp-only">[メインMC]`,
			imgSrc: "images/photo_spstage_guest_01.png",
			alt: "くれいじーまぐねっとの画像",
		},
		{
			name: "梶原叶渚",
			imgSrc: "images/photo_spstage_guest_04.png",
			alt: "梶原叶渚の画像",
		},
		{
			name: "MINAMI",
			imgSrc: "images/photo_spstage_guest_05.png",
			alt: "MINAMIの画像",
		},
		{
			name: "村谷はるな",
			imgSrc: "images/photo_spstage_guest_06.png",
			alt: "村谷はるなの画像",
		},
		{
			name: "りんか",
			imgSrc: "images/photo_spstage_guest_07.png",
			alt: "りんかの画像",
		},
		{
			name: "",
			imgSrc: "images/photo_spstage_guest_ComingSoon.png",
			alt: "COMING SOONの画像",
		},
		{
			name: "",
			imgSrc: "images/photo_spstage_guest_ComingSoon.png",
			alt: "COMING SOONの画像",
		},
	];

	const guests2 = [
		{
			name: "EXILE TETSUYA",
			imgSrc: "images/photo_spstage_guest_02.png",
			alt: "EXILE TETSUYAの画像",
		},
		{
			name: `岩谷翔吾<br class="sp-only">（THE RAMPAGE）`,
			imgSrc: "images/photo_spstage_guest_03.png",
			alt: "岩谷翔吾（THE RAMPAGE）の画像",
		},
		{
			name: "",
			imgSrc: "images/photo_spstage_guest_ComingSoon.png",
			alt: "COMING SOONの画像",
		},
	];

	return (
		<div>
			<S_P_Subtitle id="2">めがねのまちさばえ応援プロジェクト</S_P_Subtitle>
			<ContentsTitle
				title={title}
				caption={caption}
				balloonList={balloonList}
				annotation={annotation}
			/>
			<SECTION_CardContainer>
				<CardTitle
					title={`“さばえアクション∞（エイト）”\nコレクション produced by TGC`}
					label="出演ゲスト"
					labelNum={1}
				/>
				<DIV_GuestContainer>
					{guests1.map((guest, index) => (
						<div key={index}>
							<DIV_Image>
								<IMG_Image src={guest.imgSrc} alt={guest.alt} />
							</DIV_Image>
							<p dangerouslySetInnerHTML={{ __html: guest.name }}></p>
						</div>
					))}
				</DIV_GuestContainer>
			</SECTION_CardContainer>
			<SECTION_CardContainer>
				<CardTitle
					title="LDH ダンスワークショップショー"
					label="出演ゲスト"
					labelNum={2}
				/>
				<DIV_GuestContainer>
					{guests2.map((guest, index) => (
						<div key={index}>
							<DIV_Image>
								<IMG_Image src={guest.imgSrc} alt={guest.alt} />
							</DIV_Image>
							<p dangerouslySetInnerHTML={{ __html: guest.name }}></p>
						</div>
					))}
				</DIV_GuestContainer>
			</SECTION_CardContainer>
			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<CardTitle
						title="繊維産業×福井文化服装学院コラボ"
						label="ステージ企画"
						labelNum={1}
					/>
					<S_P_Description>
						鯖江市内繊維産業から排出される繊維端材を用いて、学生の自由な発想と創造性でサステナブルアクセサリーを製作！「“さばえアクション∞(エイト)”コレクション
						produced by TGC」でモデルが着用します。
					</S_P_Description>
					<DIV_ImageContainer>
						<img
							src="images/photo_spstage_collab_01.png"
							alt="福井文化服装学院の画像"
						/>
						<img src="images/photo_spstage_collab_02.png" alt="学生の画像" />
					</DIV_ImageContainer>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<CardTitle
						title="キッズモデルコラボ"
						label="ステージ企画"
						labelNum={2}
					/>
					<S_P_Description>
						子どもたちにSDGsを体感し、トップモデルとの共演による感動体験を味わってもらうことを目的に、昨年に引き続き、キッズモデルコラボステージを実施します。
					</S_P_Description>
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
	S_DIV_CardContainer.withComponent("section")
)`
	margin-bottom: 30px;
`;

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
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;

	.sp-only {
		display: none;
	}

	@media (max-width: 1225px) {
		.sp-only {
			display: block;
		}
	}
	@media (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
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

// TODO: 削除する
// const DIV_Guest = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;

// 	@media (max-width: 500px) {
// 		div {
// 			width: 100%;
// 		}
// 	}
// `;

const DIV_NoticeSection = styled.div`
	background-color: ${COLORS.NOTICE_BG};
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
