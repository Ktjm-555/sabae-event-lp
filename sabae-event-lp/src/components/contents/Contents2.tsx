import styled from "@emotion/styled";
import {
	S_P_Description,
	S_DIV_CardContainer,
	S_P_Subtitle,
	S_H2_Title,
	S_DIV_CardHeaderContainer,
} from "../../Style";
import { Button } from "../ui/Button";
import { COLORS } from "../../consts/color";
import { guests1, guests2 } from "../../items/guests";
import { useNavigate } from "react-router-dom";
import { ContentsTitleOnly } from "./CotentsTitleOnly";
import { TitleCaption } from "../ui/TitleCaption";
import { Balloon2 } from "../ui/Balloon2";

export const Contents2 = () => {
	const navigate = useNavigate();

	const goToSabaeModelPage = () => {
		window.open("https://www.sabae-sdgs.jp/news/2120/", "_blank");
	};

	const goToTicketPage = () => {
		navigate("/ticket");
	};

	return (
		<div>
			<S_P_Subtitle id="3">めがねのまちさばえ応援プロジェクト</S_P_Subtitle>
			<ContentsTitleOnly
				title={"スペシャルステージ"}
				balloonList={[]}
				balloonList2={["9/20", "土", "13:00〜", "@ステージエリア"]}
			/>
			<TitleCaption
				caption="トーク×ファッション×ダンス！ここでしか味わえないパフォーマンスで盛り上がろう！"
				annotation="※タイムスケジュールは、すべての出演ゲストが出揃い次第発表させていただきます。"
			/>
			<DIV_ButtonContainer>
				<Button onClick={() => goToTicketPage()}>
					入場券のお申込みはこちら
				</Button>
			</DIV_ButtonContainer>
			<SECTION_CardContainer>
				<S_DIV_CardHeaderContainer>
					<S_H2_Title>
						“さばえアクション∞（エイト）”コレクション <br className="sp-only" />
						<span className="english">produced by TGC</span>
					</S_H2_Title>
					<Balloon2 balloonList={["9/20", "土", "13:30〜"]} />
				</S_DIV_CardHeaderContainer>
				{/* カミングスーン */}
				{/* <DIV_Container>
					<img
						src={`${import.meta.env.BASE_URL}images/commingSoon_yoko2.png`}
					/>
				</DIV_Container> */}
				<DIV_GuestContainer>
					{guests1.map((guest, index) => (
						<div key={index}>
							<DIV_Image>
								<IMG_Image src={guest.imgSrc} alt={guest.alt} />
							</DIV_Image>
							<p dangerouslySetInnerHTML={{ __html: guest.name }}></p>
						</div>
					))}
					{/* カミングスーン */}
					{/* <DIV_PcOnlyContainer>
						<DIV_Image>
							<IMG_Image
								src={`${
									import.meta.env.BASE_URL
								}images/photo_spstage_guest_ComingSoon4.png`}
								alt="COMING SOONの画像"
							/>
						</DIV_Image>
					</DIV_PcOnlyContainer> */}
				</DIV_GuestContainer>
			</SECTION_CardContainer>
			<SECTION_CardContainer>
				<S_DIV_CardHeaderContainer>
					<S_H2_Title>LDH ダンスワークショップショー</S_H2_Title>
					<Balloon2 balloonList={["9/20", "土", "14:10〜"]} />
				</S_DIV_CardHeaderContainer>
				{/* <DIV_Container>
					<img src={`${import.meta.env.BASE_URL}images/commingSoon_yoko.png`} />
				</DIV_Container> */}
				<DIV_GuestContainer>
					{guests2.map((guest, index) => (
						<div key={index}>
							<DIV_Image>
								<IMG_Image src={guest.imgSrc} alt={guest.alt} />
							</DIV_Image>
							<p dangerouslySetInnerHTML={{ __html: guest.name }}></p>
						</div>
					))}
					{/* <DIV_PcOnlyContainer>
						<DIV_Image>
							<IMG_Image
								src={`${
									import.meta.env.BASE_URL
								}images/photo_spstage_guest_ComingSoon.png`}
								alt="COMING SOONの画像"
							/>
						</DIV_Image>
					</DIV_PcOnlyContainer> */}
				</DIV_GuestContainer>
			</SECTION_CardContainer>
			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<S_DIV_CardHeaderContainer>
						<S_H2_Title>繊維産業×福井文化服装学院コラボ</S_H2_Title>
						<Balloon2 balloonList={["9/20", "土"]} />
					</S_DIV_CardHeaderContainer>
					<DIV_ImageContainer>
						<S_P_Description>
							鯖江市内繊維産業から排出される繊維端材を用いて、学生の自由な発想と創造性でサステナブルアクセサリーを製作！「“さばえアクション∞(エイト)”コレクション
							produced by TGC」でモデルが着用します。
						</S_P_Description>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_02.png`}
							alt="学生の画像"
						/>
					</DIV_ImageContainer>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<S_DIV_CardHeaderContainer>
						<S_H2_Title>キッズモデルコラボ</S_H2_Title>
						<Balloon2 balloonList={["9/20", "土"]} />
					</S_DIV_CardHeaderContainer>
					<DIV_ImageContainer className="tmp_vertical">
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
					</DIV_ImageContainer>
				</SECTION_CardContainer>
			</DIV_CardsWrapper>
			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<S_DIV_CardHeaderContainer>
						<S_H2_Title>スーパーキッズショー</S_H2_Title>
						<Balloon2 balloonList={["9/21", "日", "10:00～/13:00～"]} sunday />
					</S_DIV_CardHeaderContainer>
					<DIV_ImageContainer>
						<S_P_Description>
							歌・武道・リズムで魅せる！子どもたちの全力パフォーマンスが輝きます。
						</S_P_Description>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_03.png`}
							alt="柔道着のキッズの画像"
						/>
					</DIV_ImageContainer>
				</SECTION_CardContainer>
				<SECTION_CardContainer>
					<S_DIV_CardHeaderContainer>
						<S_H2_Title>キッズダンスショー</S_H2_Title>
						<Balloon2 balloonList={["9/21", "日", "10:30～/14:00～"]} sunday />
					</S_DIV_CardHeaderContainer>
					<DIV_ImageContainer>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_04.png`}
							alt="ダンスしているキッズの画像1"
						/>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_05.png`}
							alt="ダンスしているキッズの画像2"
						/>
					</DIV_ImageContainer>
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

const DIV_ButtonContainer = styled.div`
	margin-bottom: 20px;
`;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	grid-auto-rows: 1fr;

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1100px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}

	@media (max-width: 500px) {
		gap: 0;
	}
`;

// const DIV_Container = styled.div`
// 	display: none;
// 	@media (max-width: 800px) {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		margin-bottom: 20px;
// 	}
// `;

// const DIV_PcOnlyContainer = styled.div`
// 	@media (max-width: 800px) {
// 		display: none;
// 	}
// `;

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

const DIV_NoticeSection = styled.div`
	background-color: ${COLORS.NOTICE_BG};
	padding: 20px;
	border-radius: 40px;
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

// TODO: 名前変えたい。画像だけじゃない
const DIV_ImageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	gap: 20px;

	img {
		width: 100%;
		overflow: hidden;
		border-radius: 40px;
	}

	@media (max-width: 1200px) {
		&.tmp_vertical {
			display: block;
		}
	}

	@media (max-width: 1100px) {
		&.tmp_vertical {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 600px) {
		&.tmp_vertical {
			display: block;
		}
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

		&.tmp_vertical {
			display: block;
		}
	}
`;
