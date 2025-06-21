import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { COLORS } from "../consts/color";
import { Button } from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { DIV_CardContainer } from "../Style";

type Props = {
	title: string;
	caption: string;
	balloonList: Array<string>;
	annotation?: string;
};

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
				<img src="logo/sabae_eight.svg" alt="さばえアクション∞(エイト)_ロゴ" />
			</DIV_OverviewContainer>
			<DIV_SwiperContainer>
				<Swiper spaceBetween={25} slidesPerView="auto" loop={true}>
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
				</Swiper>
			</DIV_SwiperContainer>
		</div>
	);
};

const DIV_OverviewContainer = styled.div`
	display: flex;
	margin-bottom: 50px;
`;

const DIV_SwiperContainer = styled.div`
	/* padding分ひく */
	/* width: 100%; */
	/* width: calc(100vw - 140px);
	max-width: calc(1400px - 140px); */
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
`;
const SECTION_CgardContainer = styled.section`
	background-color: #fff;
	box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	padding: 25px;
	color: ${COLORS.TEXT};
`;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	grid-auto-rows: 1fr;

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
	}
`;

const DIV_Image = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;
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
	margin-bottom: 20px;

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
	font-size: 14px;

	@media (max-width: 500px) {
		font-size: 10px;
	}
`;
