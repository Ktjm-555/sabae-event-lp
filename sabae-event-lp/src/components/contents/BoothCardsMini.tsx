import styled from "@emotion/styled";
import { S_DIV_CardContainer } from "../../Style";
import { COLORS } from "../../consts/color";

type item = {
	id: number;
	imgSrc: string;
	title: string;
	isLong?: boolean;
	notice?: string;
	noticeBlue?: boolean;
};

type Props = {
	items: item[];
};

// 画像とタイトルのみのカード
export const BoothCardsMini = ({ items }: Props) => {
	return (
		<>
			<DIV_CardsContainer>
				{items.map((item) => {
					const {
						id,
						imgSrc,
						title,
						isLong = false,
						notice = "",
						noticeBlue = false,
					} = item;

					return (
						<DIV_CardContainer key={id}>
							<IMG_Card src={imgSrc} />

							{/* 日付付きのものは横並びに title-notice*/}
							<DIV_TitleContainer className={notice ? "title-notice" : ""}>
								<H3_Title className={isLong ? "long-title" : ""}>
									{title}
								</H3_Title>
								{notice && (
									<SPAN_Notice className={noticeBlue ? "blue" : ""}>
										{notice}
									</SPAN_Notice>
								)}
							</DIV_TitleContainer>

							{/* カードの高さを合わせる */}
							<DIV_Spacer />
						</DIV_CardContainer>
					);
				})}
			</DIV_CardsContainer>
		</>
	);
};

const DIV_CardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 15px;
	@media (max-width: 1300px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 950px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const DIV_CardContainer = styled(S_DIV_CardContainer)`
	display: flex;
	flex-direction: column;
	padding: 10px;

	@media (max-width: 600px) {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 10px;
	}
`;

const DIV_TitleContainer = styled.div`
	&.title-notice {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (max-width: 600px) {
		order: 1;
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;

		&.title-notice {
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}
	}
`;

const H3_Title = styled.h3`
	font-family: "Noto Sans", sans-serif;
	font-size: 18px;

	&.long-title {
		font-size: 14px;
	}

	@media (max-width: 600px) {
		font-size: 15px;

		&.long-title {
			font-size: 13px;
		}
	}
`;

const DIV_Spacer = styled.div`
	flex-grow: 1;
	@media (max-width: 600px) {
		display: none;
	}
`;

const IMG_Card = styled.img`
	width: 100%;
	margin-bottom: 10px;

	@media (max-width: 600px) {
		order: 2;
		margin-bottom: 0;
		width: 50%;
	}
`;

const SPAN_Notice = styled.span`
	font-size: 15px;
	font-weight: bold;
	color: ${COLORS.PRIMARY};

	&.blue {
		color: ${COLORS.TEXT_SUB_COLOR};
	}

	@media (max-width: 600px) {
		font-size: 14px;
	}
`;
