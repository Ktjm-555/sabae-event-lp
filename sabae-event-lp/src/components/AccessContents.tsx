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
								<p>
									●鯖江市スポーツ交流館（ ）<br />
									※シャトルバスが運行します。
									<br />
									●鯖江市役所（ ）<br />
									<SPAN_Notice>
										※駐車台数に限りがございます。公共交通機関をご利用いただくか、なるべく乗り合わせの上ご来場ください。
									</SPAN_Notice>
								</p>
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
