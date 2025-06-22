import styled from "@emotion/styled";
import { DIV_container, Styled_P_LargeBold } from "../Style.ts";

export const Footer = () => {
	return (
		<SECTION_FooterContainer>
			<DIV_ContentsContainer>
				<DIV_DetailContainer>
					<div>
						<P_Organized>主催：鯖江市</P_Organized>
						<P_ContactTitle>ブースエリア事務局／お問合せ</P_ContactTitle>
						<DL_ContactContainer>
							<div>
								<dt>さばえSDGs推進センター</dt>
								<dd>（指定管理者：㈱メディアビジョン）</dd>
							</div>
							<div>
								<dt>電話：</dt>
								<dd>0778-42-8938</dd>
							</div>
							<div>
								<dt>メール：</dt>
								<dd>contact@sabae-sdgs.jp</dd>
							</div>
						</DL_ContactContainer>
					</div>
					<DIV_Contens>
						<P_Event>過去のフェス</P_Event>
						<DIV_LinkList>
							<A_EventUrl
								href="https://fes.sabae-sdgs.jp/"
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
					</DIV_Contens>
				</DIV_DetailContainer>
				<DIV_Copyright>
					© 2025 Resources Center for Implementation of the SDGs in SABAE
				</DIV_Copyright>
			</DIV_ContentsContainer>
		</SECTION_FooterContainer>
	);
};

/* 背景は画面幅のため、sectionを継承しない */
/* TODO:Wrapperじゃない？ */
const SECTION_FooterContainer = styled.div`
	background-color: #e60012;
	color: #fff;
	/* TODO：コンテナの上下のpadding合わせる */
	padding-top: 35px;
	padding-bottom: 35px;
`;

const DIV_ContentsContainer = styled(DIV_container)``;

const DIV_DetailContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 900px) {
		display: block;
	}
`;

const P_Organized = styled.p`
	${Styled_P_LargeBold};
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
	font-size: 14px;
	margin: 0;
	padding: 0;

	div {
		display: flex;
	}

	dd {
		margin: 0;
	}
`;

const DIV_Contens = styled.div`
	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		margin-top: 10px;
	}
`;

const P_Event = styled.p`
	font-weight: bold;
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
	border-top: 1px solid #fff;
	margin-top: 30px;

	@media (max-width: 900px) {
		font-size: 14px;
	}

	@media (max-width: 500px) {
		font-size: 11px;
	}
`;
