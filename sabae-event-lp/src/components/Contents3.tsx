import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { DIV_CardContainer } from "../Style";
import { Button } from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

type Props = {
	title: string;
	caption?: string;
	balloonList: Array<string>;
	annotation?: string;
};

const swiperItems = [
	{
		num: "01",
		src: "images/sabae_action1.png",
		text: "いいと思ったらほめよう",
	},
	{ num: "02", src: "images/sabae_action2.png", text: "自分を大切にしよう" },
	{ num: "03", src: "images/sabae_action3.png", text: "視野を広げよう" },
	{ num: "04", src: "images/sabae_action4.png", text: "フードロスを減らそう" },
	{ num: "05", src: "images/sabae_action5.png", text: "地産地消しよう" },
	{ num: "06", src: "images/sabae_action6.png", text: "イベントに参加しよう" },
	{ num: "07", src: "images/sabae_action7.png", text: "リサイクルしよう" },
	{
		num: "08",
		src: "images/sabae_action8.png",
		text: "さばえらしさを伝えよう",
	},
];

const goToSabaeEightPage = () => {
	window.open("https://www.sabae-sdgs.jp/news/2080/", "_blank");
};

export const Contents3 = ({
	title,
	caption,
	balloonList,
	annotation,
}: Props) => {
	return (
		<div>
			<DIV_OverviewContainer>
				<div>
					<ContentsTitle
						title={title}
						caption={caption}
						balloonList={balloonList}
						annotation={annotation}
					/>
					<Button onClick={goToSabaeEightPage}>詳しくはこちら</Button>
				</div>
				<DIV_Content>
					<img
						src="logo/sabae_eight.svg"
						alt="さばえアクション∞(エイト)_ロゴ"
					/>
					<p>「笑顔があふれるまち」を目指す8つのアクション</p>
				</DIV_Content>
			</DIV_OverviewContainer>
			<DIV_OverviewContainer_SP>
				<ContentsTitle
					title={title}
					caption={caption}
					balloonList={balloonList}
					annotation={annotation}
				/>
				<DIV_Content>
					<IMG_Logo
						src="logo/sabae_eight.svg"
						alt="さばえアクション∞(エイト)_ロゴ"
					/>
					<P_LogoSup>「笑顔があふれるまち」を目指す8つのアクション</P_LogoSup>
					<Button onClick={goToSabaeEightPage}>詳しくはこちら</Button>
				</DIV_Content>
			</DIV_OverviewContainer_SP>
			<DIV_SwiperContainer>
				<Swiper
					spaceBetween={25}
					modules={[Navigation, Autoplay]}
					navigation={true}
					autoplay={{
						delay: 2500,
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
	color: #4b5563;

	@media (max-width: 900px) {
		margin-bottom: 25px;
	}
`;

const P_LogoSup = styled.p`
	margin-bottom: 25px;
`;

const DIV_SwiperContainer = styled.div`
	.swiper-button-prev,
	.swiper-button-next {
		background-color: rgba(230, 0, 18, 0.8);
		color: #fff;
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

const DIV_SwiperCardContainer = styled(DIV_CardContainer)`
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
	color: #4b5563;

	p {
		font-family: "M PLUS 1", sans-serif;
	}
`;

const IMG_Logo = styled.img`
	@media (max-width: 385px) {
		width: 340px;
	}
`;
