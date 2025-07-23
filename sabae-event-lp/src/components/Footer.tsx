import styled from "@emotion/styled";
import { S_SECTION_container } from "../Style.ts";
import { COLORS } from "../consts/color.ts";
import { TEXT_L } from "../consts/typography.ts";

export const Footer = () => {
	return (
		<SECTION_FooterContainer>
			<S_SECTION_container>
				<DIV_DetailContainer>
					<div>
						<P_Organized>主催：鯖江市</P_Organized>
						<P_ContactTitle>お問合せ</P_ContactTitle>
						<DL_ContactContainer>
							<dt>鯖江市総合政策課</dt>
							<dd>
								<img src={`${import.meta.env.BASE_URL}icon/tel-phone.svg`} />
								0778-53-2263
							</dd>
						</DL_ContactContainer>
						<P_ContactTitle>ブースエリア事務局</P_ContactTitle>
						<DL_ContactContainer>
							<dt>さばえSDGs推進センター（指定管理者 (株)メディアビジョン）</dt>
							<dd>
								<img src={`${import.meta.env.BASE_URL}icon/tel-phone.svg`} />
								0778-42-8938　contact@sabae-sdgs.jp
							</dd>
						</DL_ContactContainer>
					</div>
					<DIV_Contents>
						<div>
							<img src={`${import.meta.env.BASE_URL}banners/kaigyo40.svg`} />
						</div>
						<P_Event>過去のフェス</P_Event>
						<DIV_LinkList>
							<A_EventUrl
								href="https://fes.sabae-sdgs.jp/2024/"
								target="_blank"
								rel="noopener noreferrer"
							>
								2024年
							</A_EventUrl>
							<A_EventUrl
								href="https://fes.sabae-sdgs.jp/2023/"
								target="_blank"
								rel="noopener noreferrer"
							>
								2023年
							</A_EventUrl>
						</DIV_LinkList>
					</DIV_Contents>
				</DIV_DetailContainer>
				<DIV_Copyright>
					© 2025 Resources Center for Implementation of the SDGs in SABAE
				</DIV_Copyright>
			</S_SECTION_container>
		</SECTION_FooterContainer>
	);
};

/* 背景は画面幅のため、sectionを継承しない */
/* TODO:Wrapperじゃない？ */
const SECTION_FooterContainer = styled.div`
	background-color: ${COLORS.PRIMARY};
	color: ${COLORS.TEXT_ON_ACCENT};
	/* TODO：コンテナの上下のpadding合わせる */
	padding-top: 35px;
	padding-bottom: 35px;
`;

const DIV_DetailContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 900px) {
		display: block;
	}
`;

const P_Organized = styled.p`
	${TEXT_L};
	font-family: "Noto Sans", sans-serif;
	font-weight: bold;
	margin-bottom: 20px;

	@media (max-width: 500px) {
		font-size: 20px;
	}
`;

const P_ContactTitle = styled.p`
	font-size: 18px;
	font-weight: bold;

	@media (max-width: 500px) {
		font-size: 16px;
	}
`;

const DL_ContactContainer = styled.dl`
	font-size: 16px;
	margin: 0;
	padding: 0;
	line-height: 32px;

	dd {
		img {
			margin-right: 5px;
			vertical-align: text-top;
		}
	}

	/* 450px以下のとき、最初のdivだけ縦並び */
	/* さばえSDGs推進センター だけ */
	@media (max-width: 450px) {
		div:first-of-type {
			flex-direction: column;
			align-items: flex-start;
		}
	}
`;

const DIV_Contents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	@media (max-width: 900px) {
		margin-top: 10px;
	}
`;

const P_Event = styled.p`
	font-weight: bold;
	margin-top: 15px;
`;

const DIV_LinkList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const A_EventUrl = styled.a`
	display: inline-block;
	text-decoration: underline;

	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
		color: #ff9999;
	}
`;

const DIV_Copyright = styled.div`
	text-align: right;
	border-top: 1px solid ${COLORS.TEXT_ON_ACCENT};
	margin-top: 20px;
	padding-top: 10px;

	@media (max-width: 900px) {
		font-size: 16px;
	}

	@media (max-width: 500px) {
		font-size: 11px;
	}
`;
