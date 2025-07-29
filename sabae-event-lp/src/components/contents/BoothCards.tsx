import styled from "@emotion/styled";
import { S_DIV_CardContainer } from "../../Style";
import { COLORS } from "../../consts/color";
import { Modal } from "../ui/modal";
import { useState } from "react";
import { sdgsList } from "../../items/sdgs";
import { SdgsModalContents } from "./sdgsModalContents";

type Item = {
	id: number;
	imgSrc: string;
	title: string;
	isLong: boolean;
	name: string;
	isNameLong: boolean;
	numbers: number[];
	notice?: string;
	noticeBlue?: boolean;
};

type Props = {
	items: Item[];
};

export const BoothCards = ({ items }: Props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedNum, setSelectedNum] = useState<number | null>(null);

	const sdgsItem = sdgsList.find((item) => item.id === selectedNum);

	return (
		<>
			<DIV_CardsContainer>
				{items.map((item) => {
					const {
						id,
						imgSrc,
						title,
						isLong = false,
						name,
						isNameLong = false,
						numbers,
						notice = "",
						noticeBlue = false,
					} = item;

					return (
						<DIV_CardContainer key={id}>
							<IMG_Card src={imgSrc} />

							<H3_Title
								className={isLong ? "long-title" : ""}
								dangerouslySetInnerHTML={{ __html: title }}
							></H3_Title>

							<DIV_Spacer />

							<DIV_CardFooter>
								<p className={isNameLong ? "long-name" : ""}>{name}</p>

								<DIV_NoticeNumber className={notice ? "" : "flex-controle"}>
									{notice && (
										<SPAN_Notice className={noticeBlue ? "blue" : ""}>
											{notice}
										</SPAN_Notice>
									)}

									<P_FooterP>
										SDGs目標：
										<span>
											{numbers.length
												? numbers.map((num) => (
														<IMG_SdgsNumber
															key={num}
															src={`${
																import.meta.env.BASE_URL
															}images/sdgs_number/figure_number_${num}.svg`}
															alt={`SDGs目標 ${num}`}
															onClick={() => {
																setModalOpen(true);
																setSelectedNum(num);
															}}
														/>
												  ))
												: "未定"}
										</span>
									</P_FooterP>
								</DIV_NoticeNumber>
							</DIV_CardFooter>
						</DIV_CardContainer>
					);
				})}
			</DIV_CardsContainer>
			<Modal
				title="SDGs17の目標について"
				isOpen={isModalOpen}
				onClose={() => {
					setModalOpen(false);
					setSelectedNum(null);
				}}
				mini
			>
				{sdgsItem && selectedNum && (
					<SdgsModalContents number={selectedNum} item={sdgsItem} />
				)}
			</Modal>
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

	// max-width 他のと連動している
	@media (max-width: 600px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"title image"
			"item image";
		column-gap: 10px;
		align-items: start;
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
		grid-area: title;
		order: 1;
		margin-bottom: 16px;

		&.long-title {
			font-size: 13px;
		}
	}
`;

const DIV_Spacer = styled.div`
	flex-grow: 1;
`;

const IMG_Card = styled.img`
	width: 100%;
	margin-bottom: 10px;

	@media (max-width: 600px) {
		grid-area: image;
		margin-bottom: 0;
	}
`;

const IMG_SdgsNumber = styled.img`
	margin-left: 5px;
	margin-bottom: 3px;
	vertical-align: middle;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

const DIV_CardFooter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	p.long-name {
		font-size: 13px;
	}

	@media (max-width: 600px) {
		grid-area: item;
		align-self: end;
		font-size: 11px;
	}
`;

const DIV_NoticeNumber = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	// noticeがない時は、右寄せ
	&.flex-controle {
		justify-content: flex-end;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		align-items: end;
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
		font-size: 11px;
		order: 2;
	}
`;

const P_FooterP = styled.p`
	@media (max-width: 600px) {
		order: 1;
	}
`;
