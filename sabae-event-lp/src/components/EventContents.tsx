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

	const goToWakuwakuPage = () => {
		// TODO: わくわくサステナブースページへ
		navigate("/news");
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
							balloonList={["9/20", "土", "9/21", "日"]}
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
								<Button onClick={goToWakuwakuPage}>詳しくはこちら</Button>
							</DIV_Caption1>
						</DIV_Contents1>
					</div>

					<div>
						<ContentsTitleOnly
							title={"パーク探検！クイズラリー"}
							balloonList={["9/20", "土", "9/21", "日"]}
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
							balloonList={["9/20", "土", "9/21", "日"]}
						/>
						<DIV_Contents2 className="first-item">
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_03.png`}
								alt="ブースの画像"
							/>
							<DIV_Caption2>
								<H2_Title>インクルーシブ遊具</H2_Title>
								<p>障がいの有無に関わらずみんなで楽しめる遊具で遊ぼう！</p>
							</DIV_Caption2>
						</DIV_Contents2>
						{/* 画像が後の場合SPの際上下ひっくり返さなくても良い no-reverse*/}
						<DIV_Contents2 className="no-reverse">
							<DIV_Caption2>
								<H2_Title>はたらくくるま乗車体験</H2_Title>
								<p className="mg-bt">ミニショベルでボールすくい！</p>
								<Button onClick={goToWakuwakuPage}>詳しくはこちら</Button>
							</DIV_Caption2>
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_04.png`}
								alt="ブースの画像"
							/>
						</DIV_Contents2>
					</div>
					<div>
						<ContentsTitleOnly
							title={"フードエリア"}
							balloonList={["9/20", "土", "9/21", "日"]}
						/>
						<DIV_Contents2 className="first-item">
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_05.png`}
								alt="ブースの画像"
							/>
							<DIV_Caption2>
								{/* H2のタイトルの高さ分を開けるため */}
								<DIV_Hidden2></DIV_Hidden2>
								<p>ここでしか食べられない地産地消グルメを味わおう！</p>
							</DIV_Caption2>
						</DIV_Contents2>
						{/* 画像が後の場合SPの際上下ひっくり返さなくても良い no-reverse*/}
						<DIV_Contents2 className="no-reverse">
							<DIV_Caption2>
								{/* H2のタイトルの高さ分を開けるため */}
								<DIV_Hidden2></DIV_Hidden2>
								<p className="mg-bt">美味しいスイーツもたくさん</p>
								<Button onClick={goToWakuwakuPage}>詳しくはこちら</Button>
							</DIV_Caption2>
							<img
								src={`${import.meta.env.BASE_URL}images/photo_try&buy_06.png`}
								alt="ブースの画像"
							/>
						</DIV_Contents2>
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
		gap: 30px;
		margin-bottom: 40px;
	}

	/* ここだけレスポンシブ例外対応 */
	/* ここmax-width変えたら、DIV_Hidden1も変える */
	@media (max-width: 700px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}

	@media (max-width: 500px) {
		gap: 20px;
		margin-bottom: 30px;
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
		// 縦表示の時画像の上にキャプションを持ってくる
		flex-direction: column-reverse;
		gap: 15px;

		// 元々画像の上に書いている場合はno-reverse！
		&.no-reverse {
			flex-direction: column;
		}
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
const DIV_Caption1 = styled.div`
	// ボタンありの場合
	p.mg-bt {
		margin-bottom: 10px;
	}
`;

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
`;
