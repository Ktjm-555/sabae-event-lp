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
			<TitleCaption caption="トーク×ファッション×ダンス！ここでしか味わえないパフォーマンスで盛り上がろう！" />
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
				<SECTION_CardContainer className="left none-bottom">
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
				<SECTION_CardContainer className="left none-bottom">
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
				<SECTION_CardContainer className="right none-bottom">
					<S_DIV_CardHeaderContainer>
						<S_H2_Title>スーパーキッズショー</S_H2_Title>
						<Balloon2 balloonList={["9/21", "日", "10:00～/13:00～"]} sunday />
					</S_DIV_CardHeaderContainer>
					<DIV_ImageContainer className="bottom">
						<S_P_Description>
							<SPAN_Time>10:00～</SPAN_Time>
							<H3>
								国際空手道連盟 極真会館
								<br />
								坂本派 福井県本部
							</H3>
							迫力満点！子どもたちの日々の鍛錬の成果をステージで披露します。気合いと技にご注目ください！
						</S_P_Description>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_03.png`}
							alt="国際空手道連盟 極真会館 坂本派 福井県本部の画像"
						/>
					</DIV_ImageContainer>
					<DIV_ImageContainer className="bottom responsive-order">
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_06.png`}
							alt="Jammy×Jammyの画像"
						/>
						<S_P_Description>
							<SPAN_Time>13:00～</SPAN_Time>
							<H3>Jammy×Jammy</H3>
							僕たちは、ドラムだけで構成されるチームです！今回は、選抜された小学３年生・４年生・５年生・中学１年生のメンバー８名でパフォーマンスさせていただきます。Jammy×Jammyのツインドラムで、ステージを盛り上げるぜ！
						</S_P_Description>
					</DIV_ImageContainer>
					<DIV_ImageContainer>
						<S_P_Description>
							<SPAN_Time>13:30～</SPAN_Time>
							<H3>富田 輝</H3>
							私は、第48回全日本ジュニアクラッシック音楽コンクール声楽部門で第5位に入賞しました。自然豊かな西山公園での披露は初めてで緊張しますが、「日本一」を目指すため磨き上げた歌声をぜひ聞いてください。{" "}
						</S_P_Description>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_07.png`}
							alt="富田 輝の画像"
						/>
					</DIV_ImageContainer>
				</SECTION_CardContainer>
				<SECTION_CardContainer className="left none-bottom">
					<S_DIV_CardHeaderContainer>
						<S_H2_Title id="7">キッズダンスショー</S_H2_Title>
						<Balloon2 balloonList={["9/21", "日", "10:30～/14:30～"]} sunday />
					</S_DIV_CardHeaderContainer>

					<SPAN_Time>10:30～12:45</SPAN_Time>
					<P_SmallTitle>午前の部</P_SmallTitle>
					<H3 className="top-bottom">SDGsダンスショーケース</H3>
					<S_P_Description className="none-bottom">
						鯖江のダンススタジオSHAKE、ROSEA、LEGEnD OF
						YOUによるダンスショーケースです。子どもから大人まで、25チームがダンスでSDGsフェスを盛り上げます！
					</S_P_Description>
					<DIV_ImageContainer className="bottom">
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_08.png`}
							alt="ダンスしているキッズの画像1"
						/>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_09.png`}
							alt="ダンスしているキッズの画像2"
						/>
					</DIV_ImageContainer>

					<SPAN_Time>14:30～16:00</SPAN_Time>
					<P_SmallTitle>午後の部</P_SmallTitle>
					<H3 className="top-bottom">まなびサイト&ダンススタジオBRUSH</H3>
					<S_P_Description className="none-bottom">
						チア、HIP
						HOP、K-POPなど、いろんなダンスで会場に熱い演技をお届けします！
					</S_P_Description>
					<DIV_ImageContainer>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_10.png`}
							alt="ダンスしているキッズの画像1"
						/>
						<img
							src={`${
								import.meta.env.BASE_URL
							}images/photo_spstage_collab_11.png`}
							alt="ダンスしているキッズの画像2"
						/>
					</DIV_ImageContainer>
				</SECTION_CardContainer>
			</DIV_CardsWrapper>
			<S_P_Subtitle id="6">ステージエリア</S_P_Subtitle>
			<ContentsTitleOnly title={"タイムスケジュール"} balloonList={[]} />
			<DIV_CardsWrapper_2>
				<SECTION_CardContainer className="none-bottom">
					<S_DIV_CardHeaderContainer>
						<H2_Title className="blue">
							9/20<Span_Circle>土</Span_Circle>
						</H2_Title>
					</S_DIV_CardHeaderContainer>
					<p>めがねのまちさばえ応援プロジェクトスペシャルステージ</p>
					<ul>
						<li>
							12:00<span className="show">開場</span>
						</li>
						<li>
							13:00
							<span className="show">
								[オープニングアクト] 鯖江高校吹奏楽部
							</span>
						</li>
						<li>
							13:30
							<span className="show">
								“さばえアクション∞（エイト）”コレクション produced by TGC
							</span>
						</li>
						<li>
							14:05<span className="show">LDH ダンスワークショップショー</span>
						</li>
						<li>
							14:45<span className="show">終了予定</span>
						</li>
					</ul>
				</SECTION_CardContainer>
				<SECTION_CardContainer className="none-bottom">
					<S_DIV_CardHeaderContainer>
						<H2_Title>
							9/21<Span_Circle className="red">日</Span_Circle>
						</H2_Title>
					</S_DIV_CardHeaderContainer>
					<ul>
						<li>
							10:00
							<span className="show">
								スーパーキッズショー
								<br />
								<span className="ml-none">
									「国際空手道連盟 極真会館 坂本派 福井県本部」
								</span>
							</span>
						</li>
						<li>
							10:30<span className="show">キッズダンスショー 午前の部</span>
						</li>
						<li>
							13:00
							<span className="show">スーパーキッズショー「Jammy×Jammy」</span>
						</li>
						<li>
							13:30<span className="show">スーパーキッズショー「富田 輝」</span>
						</li>
						<li>
							14:00<span className="show">キッズダンスショー 午後の部</span>
						</li>
					</ul>
				</SECTION_CardContainer>
			</DIV_CardsWrapper_2>
		</div>
	);
};

const SECTION_CardContainer = styled(
	S_DIV_CardContainer.withComponent("section")
)`
	margin-bottom: 30px;

	&.none-bottom {
		margin-bottom: 0;
	}
`;

const DIV_ButtonContainer = styled.div`
	margin-bottom: 20px;
`;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(3, auto);
	gap: 20px;
	grid-auto-rows: 1fr;
	margin-bottom: 30px;

	.left {
	}

	.right {
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1100px) {
		grid-template-columns: 1fr;
		gap: 30px;

		.right {
			grid-column: 1;
			grid-row: auto;
		}
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

	&.bottom {
		margin-bottom: 30px;
	}

	@media (max-width: 1200px) {
		// 募集要項を縦に配置する
		&.tmp_vertical {
			display: block;
		}
	}

	@media (max-width: 1100px) {
		// 募集要項を横並びにする
		&.tmp_vertical {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 600px) {
		// 募集要項を縦に配置する
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

		// SPの際に画像が下に来るようにする
		&.responsive-order {
			display: flex;
			flex-direction: column-reverse;
			gap: 0;
		}
	}
`;

const SPAN_Time = styled.span`
	color: ${COLORS.PRIMARY};
	font-weight: bold;
`;

const P_SmallTitle = styled.p`
	font-size: 18px;
	font-weight: bold;
	display: inline;
	margin-left: 15px;
`;

const H3 = styled.h3`
	font-family: "Noto Sans", sans-serif;
	font-size: 20px;

	@media (max-width: 500px) {
		font-size: 16px;
	}
	&.top-bottom {
		margin: 15px 0;
	}
`;

const DIV_CardsWrapper_2 = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr; /* 2列を等幅に */
	gap: 20px;

	span,
	p {
		font-weight: bold;
	}

	li {
		padding-left: 3.5em;
		text-indent: -3.5em;
	}

	.show {
		margin-left: 12px;

		.ml-none {
			margin-left: 0;
		}
	}

	@media (max-width: 750px) {
		grid-template-columns: 1fr;
		gap: 30px;

		.right {
			grid-column: 1;
			grid-row: auto;
		}
	}
`;

const H2_Title = styled(S_H2_Title)`
	&.blue {
		color: #004080;
	}
	color: #e60012;
`;

const Span_Circle = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	background-color: #004080;
	color: #fff;
	border-radius: 50%;

	font-size: 0.7em;
	width: 1.6em;
	height: 1.6em;
	margin-left: 0.3em;
	vertical-align: middle;

	transform: translateY(-0.1em);
	&.red {
		background-color: #e60012;
	}
`;
