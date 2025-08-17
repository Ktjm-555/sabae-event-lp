import styled from "@emotion/styled";
import {
	S_SECTION_container,
	S_DIV_SectionWrapper,
	S_DIV_CardContainer,
} from "../Style.ts";

import { COLORS } from "../consts/color.ts";
import { ZoomIcon } from "./ui/ZoomIcon.tsx";
import { Modal } from "./ui/modal.tsx";
import { useState } from "react";
import { ContentsTitleOnly } from "./contents/CotentsTitleOnly.tsx";
import { AccessCardContents } from "./contents/AccessCardContents.tsx";

export const AccessContents = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<DIV_EventWrapper>
			<S_SECTION_container>
				<DIV_ContentsContainer>
					<div id="4">
						<ContentsTitleOnly title={"会場マップ"} balloonList={[]} />
						<DIV_CardContainer>
							<DIV_ImgContainerWrapper>
								<DIV_ImgContainer>
									<img
										src={`${import.meta.env.BASE_URL}images/figure_map.png`}
										className="map"
									/>
									<Span_IconPosition onClick={() => setModalOpen(true)}>
										<ZoomIcon />
									</Span_IconPosition>
								</DIV_ImgContainer>
							</DIV_ImgContainerWrapper>
						</DIV_CardContainer>
					</div>
					<div id="5">
						<ContentsTitleOnly title={"アクセス"} balloonList={[]} />
						<DIV_CardContainer>
							<AccessCardContents />
						</DIV_CardContainer>
					</div>
				</DIV_ContentsContainer>
			</S_SECTION_container>
			<Modal
				title="会場マップ"
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
			>
				<IMG_ModalImage
					src={`${import.meta.env.BASE_URL}images/figure_map.png`}
					className="map"
				/>
			</Modal>
		</DIV_EventWrapper>
	);
};

const DIV_EventWrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_NORMAL_BG};
	@media (max-width: 900px) {
		padding-bottom: 40px;
	}
	@media (max-width: 500px) {
		padding-bottom: 30px;
	}
`;

const DIV_ContentsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
	grid-auto-rows: 1fr;

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1000px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}
`;

// ここ修正するか変える（タイトルからひとまとめにしてgridする？）
/* NOTO: 上記で高さを揃えているので子要素（カードの高さをあわせる） */
const DIV_CardContainer = styled(S_DIV_CardContainer)`
	/* 100% - タイトル高さ - タイトル下margin - カードpadding上下 */
	height: calc(100% - 86px - 32px - 40px);
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 900px) {
		/* 100% - タイトル高さ - タイトル下margin - カードpadding上下 + マップ画像が超える分？*/
		height: calc(100% - 86px - 14px - 40px + 25px);
	}

	@media (max-width: 800px) {
		height: auto;
	}
`;

const DIV_ImgContainerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const DIV_ImgContainer = styled.div`
	position: relative;

	img {
		width: 100%;
		border: 1px solid ${COLORS.BORDER_ON_ACCENT};
	}
`;

const Span_IconPosition = styled.span`
	position: absolute;
	bottom: 0px;
	right: 8px;
	width: 40px;

	@media (max-width: 1200px) {
		right: 15px;
	}

	@media (max-width: 800px) {
		right: 8px;
	}

	@media (max-width: 600px) {
		right: 15px;
	}

	&:hover,
	&:active,
	&:focus {
		fill: #ff9999;
	}
`;

// IMG_ZoomIconと連動してる。レスポンシブ
// マップのアイコンの位置のせいで。
const DIV_DisplayContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 15px;

	.map {
		width: 100%;
	}

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}

	&.tate {
		display: flex;
		flex-direction: column;
	}

	img {
		margin: 0 auto;
	}
`;

const IMG_icon = styled.img`
	vertical-align: middle;
`;

const A_URL = styled.a`
	text-decoration: underline;
	text-underline-offset: 3px;

	&:hover {
		// TODO：なぜかhoverするとラインが消えるので。
		text-decoration: underline;
		opacity: 0.5;
	}
`;

const IMG_ModalImage = styled.img`
	width: 100%;
`;
