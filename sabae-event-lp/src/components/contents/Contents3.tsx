import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { S_DIV_CardContainer } from "../../Style";
import { Button } from "../ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { COLORS } from "../../consts/color";

const swiperItems = [
	{
		num: "01",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_01.png`,
		text: "いいと思ったらほめよう",
	},
	{
		num: "02",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_02.png`,
		text: "自分を大切にしよう",
	},
	{
		num: "03",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_03.png`,
		text: "視野を広げよう",
	},
	{
		num: "04",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_04.png`,
		text: "フードロスを減らそう",
	},
	{
		num: "05",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_05.png`,
		text: "地産地消しよう",
	},
	{
		num: "06",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_06.png`,
		text: "イベントに参加しよう",
	},
	{
		num: "07",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_07.png`,
		text: "リサイクルしよう",
	},
	{
		num: "08",
		src: `${import.meta.env.BASE_URL}images/figure_sabae_action_08.png`,
		text: "さばえらしさを伝えよう",
	},
];

export const Contents3 = () => {
	const goToSabaeEightPage = () => {
		window.open("https://www.sabae-sdgs.jp/news/2080/", "_blank");
	};

	return (
		<div>
			{/* 画面スクロールのためのspan */}
			{/* <span></span> */}
			<DIV_OverviewContainer>
				<div>
					<ContentsTitle
						title="「笑顔があふれるまち」を目指して行動しよう！"
						caption="SDGsに関心のある学生でつくる「さばえSDGs部」が、若者の視点から考案した行動目標。
一人一人の小さな行動で広がり、つながり、まちの未来を大きく変えていく。そんな”∞(無限)”の願いを込めた未来へのアクションです。"
						balloonList={[]}
					/>
					<Button onClick={goToSabaeEightPage}>詳しくはこちら</Button>
				</div>
				<DIV_Content>
					<img
						src={`${import.meta.env.BASE_URL}logo/sabae_eight.svg`}
						alt="さばえアクション∞(エイト)_ロゴ"
					/>
				</DIV_Content>
			</DIV_OverviewContainer>
			<DIV_OverviewContainer_SP>
				<ContentsTitle
					title="「笑顔があふれるまち」を目指して行動しよう！"
					caption="SDGsに関心のある学生でつくる「さばえSDGs部」が、若者の視点から考案した行動目標。
一人一人の小さな行動で広がり、つながり、まちの未来を大きく変えていく。そんな”∞(無限)”の願いを込めた未来へのアクションです。"
					balloonList={[]}
				/>
				<DIV_Content>
					<IMG_Logo
						src={`${import.meta.env.BASE_URL}logo/sabae_eight.svg`}
						alt="さばえアクション∞(エイト)_ロゴ"
					/>
					<Button onClick={goToSabaeEightPage}>詳しくはこちら</Button>
				</DIV_Content>
			</DIV_OverviewContainer_SP>
			<DIV_SwiperContainer>
				<Swiper
					spaceBetween={25}
					modules={[Navigation, Autoplay]}
					navigation={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					slidesPerView="auto"
					loop={true}
					breakpoints={{
						0: { centeredSlides: true },
						901: { centeredSlides: false },
					}}
				>
					{swiperItems.map((item, index) => (
						<SwiperSlide key={index} style={{ width: "280px" }}>
							<DIV_SwiperCardContainer>
								<DIV_SwiperNum>{item.num}</DIV_SwiperNum>
								<DIV_SwipeImage>
									<img src={item.src} alt={item.text} />
									<p>{item.text}</p>
								</DIV_SwipeImage>
							</DIV_SwiperCardContainer>
						</SwiperSlide>
					))}

					{/* <div className="swiper-button-next">Next</div> */}
				</Swiper>
			</DIV_SwiperContainer>
		</div>
	);
};

const DIV_OverviewContainer = styled.div`
	display: flex;
	margin-bottom: 50px;

	@media (max-width: 900px) {
		display: none;
	}
`;

const DIV_OverviewContainer_SP = styled.div`
	@media (min-width: 901px) {
		display: none;
	}

	@media (max-width: 900px) {
		display: block;
	}

	@media (max-width: 500px) {
		font-size: 14px;
	}
`;

const DIV_Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		margin-bottom: 25px;
	}
`;

const DIV_SwiperContainer = styled.div`
	.swiper-button-prev,
	.swiper-button-next {
		background-color: rgba(230, 0, 18, 0.8);
		color: ${COLORS.TEXT_ON_ACCENT};
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		&::after {
			font-size: 12px;
		}
	}
`;

const DIV_SwiperCardContainer = styled(S_DIV_CardContainer)`
	padding: 15px;
	/* スワイパーの枠に重なるため */
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 5px;
	/* SwiperSlideのwidthも変更する */
	width: 280px;
	box-sizing: border-box;
`;

const DIV_SwiperNum = styled.div`
	font-size: 36px;
	font-weight: bold;
	color: #b8b8b8;
	line-height: 1;
	margin-bottom: 8px;
`;

const DIV_SwipeImage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-family: "M PLUS 1", sans-serif;
	}
`;

// ロゴ下にボタンあり
const IMG_Logo = styled.img`
	margin-bottom: 25px;

	@media (max-width: 900px) {
		width: 360px;
	}
	@media (max-width: 500px) {
		width: 325px;
	}
`;
