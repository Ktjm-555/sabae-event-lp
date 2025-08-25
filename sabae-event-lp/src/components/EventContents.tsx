import styled from "@emotion/styled";
import {
	S_SECTION_container,
	S_P_Subtitle,
	S_P_LargeDesc,
	S_H2_Title,
} from "../Style.ts";
import { NewsContents } from "./contents/NewsContents.tsx";
import { COLORS } from "../consts/color.ts";
import { ContentsTitleOnly } from "./contents/CotentsTitleOnly.tsx";
import { Button } from "./ui/Button.tsx";
import { useNavigate } from "react-router-dom";

export const EventContents = () => {
	const navigate = useNavigate();

	const goToBoothPage = (id: number) => {
		navigate(`/booth/#${id}`);
	};

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
					<div>
						<ContentsTitleOnly
							title={"わくわくサステナブース"}
							balloonList={["9/20", "土", "21", "日"]}
						/>
						<DIV_Contents1>
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_01_1.png`}
								alt="ブースの画像"
							/>
							<DIV_Caption1>
								{/* ボタンついているやつのみmg-btつける */}
								<p className="mg-bt">
									SDGsに取り組むさまざまな企業・団体などが大集合！家族で楽しめるブースがいっぱい‼
								</p>
								<DIV_ButtonContainer>
									<Button onClick={() => goToBoothPage(1)}>
										詳しくはこちら
									</Button>
								</DIV_ButtonContainer>
							</DIV_Caption1>
						</DIV_Contents1>
					</div>

					<div>
						<ContentsTitleOnly
							title={"SDGsパーク探検！"}
							balloonList={["9/20", "土", "21", "日"]}
						/>
						<DIV_Contents1>
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_02.png`}
								alt="ブースの画像"
							/>
							<DIV_Caption1>
								<p>
									ブースを巡ってクイズにチャレンジ！体験や買い物を楽しみながら景品をゲットしよう！{" "}
								</p>
								<DIV_Hidden1></DIV_Hidden1>
							</DIV_Caption1>
						</DIV_Contents1>
					</div>
				</DIV_ContentsContainer>
				<DIV_ContentsContainer>
					<div>
						<ContentsTitleOnly
							title={"こどもの遊び場"}
							balloonList={["9/20", "土", "21", "日"]}
						/>
						<DIV_Contents2 className="first-item">
							<H2_Title className="sp-only">インクルーシブ遊具</H2_Title>
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_03.png`}
								alt="ブースの画像"
							/>
							<DIV_Caption2>
								<H2_Title className="pc-only">インクルーシブ遊具</H2_Title>
								<p>障がいの有無に関わらずみんなで楽しめる遊具で遊ぼう！</p>
							</DIV_Caption2>
						</DIV_Contents2>
						{/* 画像が後の場合SPの際上下ひっくり返さなくても良い no-reverse*/}
						<DIV_Contents2 className="no-reverse">
							<DIV_Caption2>
								<H2_Title>はたらくくるま乗車体験</H2_Title>
								<DIV_ContainerDisplay className="pc-only">
									<p className="mg-bt">ミニショベルでボールすくい！</p>
									<Button onClick={() => goToBoothPage(2)}>
										詳しくはこちら
									</Button>
								</DIV_ContainerDisplay>
							</DIV_Caption2>
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_04.png`}
								alt="ブースの画像"
							/>
							<DIV_ContainerDisplay className="sp-only">
								<p className="mg-bt">ミニショベルでボールすくい！</p>
								<DIV_ButtonContainer>
									<Button onClick={() => goToBoothPage(2)}>
										詳しくはこちら
									</Button>
								</DIV_ButtonContainer>
							</DIV_ContainerDisplay>
						</DIV_Contents2>
					</div>
					<div>
						<ContentsTitleOnly
							title={"フードエリア"}
							balloonList={["9/20", "土", "21", "日"]}
						/>
						{/* TODO: この辺の二重表現またチャレンジする一旦このまま行く */}
						<DIV_ContainerDisplay2 className="pc-only">
							<DIV_Contents2 className="first-item">
								<DIV_Hidden2></DIV_Hidden2>
								<img
									src={`${import.meta.env.BASE_URL}images/photo_try&buy_05.png`}
									alt="ブースの画像"
								/>
								<DIV_Caption2>
									{/* H2のタイトルの高さ分を開けるため */}
									<p>SDGsに取り組むキッチンカーなどがいっぱい！</p>
								</DIV_Caption2>
							</DIV_Contents2>

							{/* 画像が後の場合SPの際上下ひっくり返さなくても良い no-reverse*/}
							<DIV_Contents2 className="no-reverse">
								<DIV_Caption2>
									{/* H2のタイトルの高さ分を開けるため */}
									<DIV_Hidden2></DIV_Hidden2>
									<DIV_ContainerDisplay className="pc-only">
										<p className="mg-bt">美味しいスイーツもたくさん</p>
										<DIV_ButtonContainer>
											<Button onClick={() => goToBoothPage(3)}>
												詳しくはこちら
											</Button>
										</DIV_ButtonContainer>
									</DIV_ContainerDisplay>
								</DIV_Caption2>
								<img
									src={`${import.meta.env.BASE_URL}images/photo_try&buy_06.png`}
									alt="ブースの画像"
								/>
								<DIV_ContainerDisplay className="sp-only">
									<p className="mg-bt">美味しいスイーツもたくさん</p>
									<DIV_ButtonContainer>
										<Button onClick={() => goToBoothPage(3)}>
											詳しくはこちら
										</Button>
									</DIV_ButtonContainer>
								</DIV_ContainerDisplay>
							</DIV_Contents2>
						</DIV_ContainerDisplay2>
						{/* ここもかえる名前といか、このスタイルの当て方 */}
						<DIV_ContainerDisplay2 className="sp-only">
							<DIV_ImgContainerOverlay>
								<IMG_MainImage
									src={`${import.meta.env.BASE_URL}images/photo_try&buy_05.png`}
									alt="ブースの画像"
								/>
								<IMG_Overlay
									src={`${import.meta.env.BASE_URL}images/photo_try&buy_06.png`}
									alt="ブースの画像"
								/>
								{/* ポジションで浮いてしまった分の高さを確保する */}
								<DummySpacer />
							</DIV_ImgContainerOverlay>
							<p className="mg-bt">
								SDGsに取り組むキッチンカーなどがいっぱい！
								<br />
								美味しいスイーツもたくさん！
							</p>
							<DIV_ButtonContainer>
								<Button onClick={() => goToBoothPage(3)}>詳しくはこちら</Button>
							</DIV_ButtonContainer>
						</DIV_ContainerDisplay2>
					</div>
				</DIV_ContentsContainer>
			</S_SECTION_container>
		</DIV_EventWrapper>
	);
};

const DIV_EventWrapper = styled.div`
	background-color: ${COLORS.SEC_YELLOW_BG};
	padding-top: 150px;
	margin-top: -100px;
	width: 100%;
	padding-bottom: 0px;
	@media (max-width: 900px) {
		margin-top: -130px;
	}
`;

const DIV_ContentsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
	grid-auto-rows: 1fr;
	margin-bottom: 60px;

	@media (max-width: 900px) {
		/* gap: 30px; */
		margin-bottom: 40px;
	}

	/* ここだけレスポンシブ例外対応 */
	/* ここmax-width変えたら、DIV_Hidden1も変える */
	@media (max-width: 700px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}

	@media (max-width: 500px) {
		gap: 30px;
		margin-bottom: 30px;
	}
`;

// TODO: displayするだけのコンテナなんか定義したい
const DIV_ButtonContainer = styled.div`
	@media (max-width: 1100px) {
		display: flex;
		justify-content: center;
	}
`;

// 画像大きめ、キャプション少し小さめバージョン
const DIV_Contents1 = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	gap: 20px;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 40px;
	}

	// ここmax-width変える場合は、DIV_Hidden2の1110も変える
	@media (max-width: 1100px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&.first-item {
		margin-bottom: 15px;
	}
`;

// 画像とキャプションが同じ大きさバージョン
const DIV_Contents2 = styled(DIV_Contents1)`
	grid-template-columns: 1fr 1fr;
`;

// キャプションのトップが画像と同じバージョン
const DIV_Caption1 = styled.div``;

// キャプションが画像の高さの上下真ん中にあるバージョン
const DIV_Caption2 = styled(DIV_Caption1)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// ボタンとかの要素を伸ばしすぎないように
	align-items: flex-start;
`;

// ボタン分の高さ分を開けるための要素
const DIV_Hidden1 = styled.div`
	height: 44px;

	@media (max-width: 700px) {
		display: none;
	}
`;

// H2のタイトルの高さ分を開けるための要素
const DIV_Hidden2 = styled.div`
	display: none;

	@media (max-width: 1100px) {
		display: block;
		height: 35px;
	}

	// 縦並びには高さ不要
	@media (max-width: 700px) {
		display: none;
	}
`;

const H2_Title = styled(S_H2_Title)`
	&.sp-only {
		display: none;
	}
	@media (max-width: 1280px) {
		font-size: 20px;
	}

	// 継承フォントで小さくなってしまうので、20pxを継続
	@media (max-width: 1040px) {
		font-size: 20px;
	}

	@media (max-width: 500px) {
		font-size: 18px;
	}

	@media (max-width: 1100px) {
		&.sp-only {
			display: block;
		}

		&.pc-only {
			display: none;
		}
	}
`;

// TODO: 名前変えたい
// sp-onlyのこの辺を定義するだけでいいのか？
const DIV_ContainerDisplay = styled.div`
	&.sp-only {
		display: none;
	}

	@media (max-width: 1100px) {
		&.sp-only {
			display: block;
		}
		&.pc-only {
			display: none;
		}
	}
`;

const DIV_ContainerDisplay2 = styled.div`
	&.sp-only {
		display: none;
	}

	@media (max-width: 700px) {
		&.sp-only {
			display: block;
		}
		&.pc-only {
			display: none;
		}
	}
`;

// 画像の重なり表現
const DIV_ImgContainerOverlay = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 10px;
`;

const IMG_MainImage = styled.img`
	display: block;
	width: 70%;
	border-radius: 20px;
`;

const IMG_Overlay = styled.img`
	position: absolute;
	bottom: 0px;
	right: 0px;
	width: 50%;
	border-radius: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DummySpacer = styled.div`
	/* これを入れる前にIMG_Overlayを下げたかった分のbottomサイズを設定 */
	/* bottomを0にすると重なる */
	height: 90px;
`;
