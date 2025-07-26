import styled from "@emotion/styled";
import {
	S_SECTION_container,
	S_DIV_SectionWrapper,
	S_DIV_CardContainer,
	S_DIV_DisplayContainer,
	S_H2_Title,
} from "../Style.ts";

import { ContentsTitle } from "./contents/CotentsTitle.tsx";
import { COLORS } from "../consts/color.ts";

export const AccessContents = () => {
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
								<IMG_image
									src={`${import.meta.env.BASE_URL}images/commingSoon_yoko.png`}
								/>
							</DIV_DisplayContainer>
						</DIV_CardContainer>
					</div>
					<div>
						<ContentsTitle title="アクセス" caption="" balloonList={[]} />
						<DIV_CardContainer>
							<DIV_DisplayContainer>
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
		</DIV_EventWrapper>
	);
};

const DIV_EventWrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_NORMAL_BG};
	@media (max-width: 900px) {
		padding-bottom: 40px;
	}
	@media (max-width: 500px) {
		padding-bottom: 20px;
	}
`;

const DIV_ContentsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
	grid-auto-rows: 1fr;
	margin-bottom: 60px;

	@media (max-width: 900px) {
		margin-bottom: 40px;
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 800px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}

	@media (max-width: 500px) {
		margin-bottom: 20px;
	}
`;

/* NOTO: 上記で高さを揃えているので子要素（カードの高さをあわせる） */
const DIV_CardContainer = styled(S_DIV_CardContainer)`
	/* 100% - タイトル高さ - タイトル下margin - カードpadding上下 */
	height: calc(100% - 86px - 14px - 40px);

	@media (max-width: 800px) {
		height: auto;
	}
`;

const IMG_image = styled.img`
	width: 252px;
	height: 252px;
`;

const DIV_DisplayContainer = styled(S_DIV_DisplayContainer)`
	flex-direction: column;
	gap: 15px;

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
