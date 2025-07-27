import styled from "@emotion/styled";
import {
	S_SECTION_container,
	S_DIV_SectionWrapper,
	S_DIV_CardContainer,
	S_H2_Title,
} from "../Style.ts";

import { ContentsTitle } from "./contents/CotentsTitle.tsx";
import { COLORS } from "../consts/color.ts";
import { ZoomIcon } from "./ui/ZoomIcon.tsx";
import { Modal } from "./ui/modal.tsx";
import { useState } from "react";

export const AccessContents = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<DIV_EventWrapper>
			<S_SECTION_container>
				<DIV_ContentsContainer>
					<div>
						<ContentsTitle title="会場マップ" caption="" balloonList={[]} />
						<DIV_CardContainer>
							<DIV_DisplayContainer>
								<p>
									ステージエリアをはじめ、こどもの遊び場やフードエリア、ブースエリアなど、会場内を周遊するための情報を掲載した会場マップです。
								</p>
								<DIV_ImgContainerWrapper>
									<DIV_ImgContainer>
										<img
											src={`${
												import.meta.env.BASE_URL
											}images/figure_map_mini.png`}
											className="map"
										/>
										<Span_IconPosition onClick={() => setModalOpen(true)}>
											<ZoomIcon />
										</Span_IconPosition>
									</DIV_ImgContainer>
								</DIV_ImgContainerWrapper>
							</DIV_DisplayContainer>
						</DIV_CardContainer>
					</div>
					<div>
						<ContentsTitle title="アクセス" caption="" balloonList={[]} />
						<DIV_CardContainer>
							<DIV_DisplayContainer className="tate">
								<S_H2_Title>臨時駐車場</S_H2_Title>
								<ul>
									<li>
										●鯖江市スポーツ交流館（
										<A_URL
											href="https://maps.app.goo.gl/gP73PMZjJxFR5Qxp7"
											target="_blank"
										>
											<IMG_icon
												src={`${import.meta.env.BASE_URL}icon/map.svg`}
												alt="鯖江市スポーツ交流館のmapのアイコン"
											/>
											鯖江市宮前2丁目9-1
										</A_URL>
										）
										<br />
										※シャトルバスが運行します。
									</li>
									<li>
										●鯖江市役所（
										<A_URL
											href="https://maps.app.goo.gl/StivTBgmU626TxG76"
											target="_blank"
										>
											<IMG_icon
												src={`${import.meta.env.BASE_URL}icon/map.svg`}
												alt="鯖江市役所のmapのアイコン"
											/>
											鯖江市西山町13-1
										</A_URL>
										）<br />
										<SPAN_Notice>
											※駐車台数に限りがございます。公共交通機関をご利用いただくか、なるべく乗り合わせの上ご来場ください。
										</SPAN_Notice>
									</li>
								</ul>
							</DIV_DisplayContainer>
						</DIV_CardContainer>
					</div>
				</DIV_ContentsContainer>
			</S_SECTION_container>
			<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
				<h2>モーダルの中身</h2>
				<p>ここに説明文などが入るよ。</p>
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
	@media (max-width: 800px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}
`;

/* NOTO: 上記で高さを揃えているので子要素（カードの高さをあわせる） */
const DIV_CardContainer = styled(S_DIV_CardContainer)`
	/* 100% - タイトル高さ - タイトル下margin - カードpadding上下 */
	height: calc(100% - 86px - 14px - 40px);

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

	@media (max-width: 1200px) {
		width: 323px;
	}

	@media (max-width: 400px) {
		width: 250px;
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

const SPAN_Notice = styled.span`
	display: block;
	font-size: 12px;

	@media (max-width: 500px) {
		font-size: 10px;
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
