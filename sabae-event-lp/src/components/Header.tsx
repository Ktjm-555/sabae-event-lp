import styled from "@emotion/styled";
import { COLORS } from "../consts/color.ts";
import { Logo } from "./logo.tsx";
import { useState } from "react";

export const Header = () => {
	const [isShowMask, setIsShowMask] = useState(false);

	const toggleShowMask = () => {
		// 画面幅が小さい時だけ発動
		if (window.innerWidth <= 1030) {
			setIsShowMask(!isShowMask);
		}
	};

	return (
		<DIV_HeaderWrapper>
			<DIV_HeaderContainer>
				{/* ロゴエリア */}
				<Logo />
				<NAV_Container className={isShowMask ? "open" : ""}>
					<DIV_HeaderNavAndIconContainer>
						{/* ナビゲーション */}
						<UL_HeaderNavList>
							<LI_HeaderNavItem>
								<A_HeaderNavLink href="#1" onClick={toggleShowMask}>
									トップ
								</A_HeaderNavLink>
							</LI_HeaderNavItem>
							<LI_HeaderNavItem>
								<A_HeaderNavLink href="#2" onClick={toggleShowMask}>
									スペシャルステージ
								</A_HeaderNavLink>
							</LI_HeaderNavItem>
							<LI_HeaderNavItem>
								<A_HeaderNavLink href="#3" onClick={toggleShowMask}>
									さばえアクション∞とは
								</A_HeaderNavLink>
							</LI_HeaderNavItem>
							<LI_HeaderNavItem>
								<A_HeaderNavLink href="#4" onClick={toggleShowMask}>
									さばえ３大フェス
								</A_HeaderNavLink>
							</LI_HeaderNavItem>
						</UL_HeaderNavList>
						<div>
							<P_SnsLabel className={isShowMask ? "open" : ""}>
								公式SNS
							</P_SnsLabel>
							<DIV_IconContainer>
								<A_Icon
									href="https://x.com/sabaekoho"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="icon/twitter-x_red.svg"
										alt="鯖江市のtwitter-xのアイコン"
									/>
								</A_Icon>
								<A_Icon
									href="https://www.instagram.com/sabae.city"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="icon/instagram_red.svg"
										alt="鯖江市のinstagramのアイコン"
									/>
								</A_Icon>
								<A_Icon
									href="https://www.facebook.com/sabaecity"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="icon/facebook_red.svg"
										alt="鯖江市役所facebookのアイコン"
									/>
								</A_Icon>
							</DIV_IconContainer>
						</div>
					</DIV_HeaderNavAndIconContainer>

					{/* 主催情報 */}
					<DIV_OrganizedInfo className={isShowMask ? "open" : ""}>
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
					</DIV_OrganizedInfo>
				</NAV_Container>

				{/* ハンバーガーアイコン */}
				<DIV_HeaderToggleArea>
					<DIV_HeaderSns className={isShowMask ? "open" : ""}>
						<a
							href="https://www.instagram.com/sabae_sdgsfes/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IMG_Icon
								src="icon/instagram_gray.svg"
								alt="instagramのアイコン"
							/>
							<SPAN_UnderIcon>公式SNS</SPAN_UnderIcon>
						</a>
					</DIV_HeaderSns>

					<DIV_HeaderToggleBtn
						className={isShowMask ? "open" : ""}
						onClick={toggleShowMask}
					>
						<span></span>
						<span></span>
						<span></span>
					</DIV_HeaderToggleBtn>
				</DIV_HeaderToggleArea>
			</DIV_HeaderContainer>

			{/* ナビゲーション下のマスク */}
			{isShowMask && <DIV_Mask onClick={toggleShowMask}></DIV_Mask>}
		</DIV_HeaderWrapper>
	);
};

const A_Icon = styled.a`
	display: inline-block;
	margin-left: 12px;

	&:nth-child(1) {
		margin-left: 0px;
	}

	&:hover {
		opacity: 0.8;
	}
`;

const DIV_IconContainer = styled.div`
	display: flex;
`;

const DIV_HeaderNavAndIconContainer = styled.div`
	display: flex;

	@media (max-width: 1030px) {
		flex-direction: column;
		gap: 30px;
	}
`;

const DIV_OrganizedInfo = styled.div`
	display: none;
	&.open {
		display: block;
	}
`;

const P_SnsLabel = styled.p`
	display: none;
	&.open {
		display: block;
		margin-bottom: 14px;
	}
`;

const P_Organized = styled.p`
	font-size: 15px;
	margin-bottom: 10px;
`;

const P_ContactTitle = styled.p`
	font-size: 14px;
`;

// TODO：汎用化する？
const IMG_Icon = styled.img`
	margin-left: 8px;
	width: 25px;
	height: 25px;
`;

const SPAN_UnderIcon = styled.span`
	font-size: 10px;
	font-weight: bold;
	display: block;
`;

const DL_ContactContainer = styled.dl`
	font-size: 14px;
	margin-bottom: 10px;

	div {
		display: flex;
	}

	/* さばえSDGs推進センター だけ */
	div:first-of-type {
		flex-direction: column;
		align-items: flex-start;

		dd {
			font-size: 13px;
		}
	}
`;

const DIV_HeaderWrapper = styled.div`
	position: fixed;
	width: 100%;
	z-index: 1000;
`;

const DIV_HeaderContainer = styled.div`
	background-color: ${COLORS.HEADER};
	display: flex;
	align-items: center;
	margin: 20px;
	padding: 25px;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	@media (max-width: 1030px) {
		position: relative;
	}

	@media (max-width: 450px) {
		padding: 20px;
	}
`;

const NAV_Container = styled.nav`
	margin-left: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 1030px) {
		width: 220px;
		position: fixed;
		background-color: ${COLORS.CARD_BG};
		top: 0;
		right: -300px;
		bottom: 0;
		transition: all 0.5s;
		z-index: 3;
		opacity: 0;
		padding: 25px;
		margin-left: 0;

		&.open {
			right: 0;
			opacity: 1;
		}
	}
`;

const UL_HeaderNavList = styled.ul`
	display: flex;
	align-items: center;
	margin-right: 20px;

	@media (max-width: 1030px) {
		flex-direction: column;
	}
`;

const LI_HeaderNavItem = styled.li`
	margin-left: 15px;

	@media (max-width: 1030px) {
		&:nth-child(1) {
			margin-top: 40px;
		}
	}
`;

const A_HeaderNavLink = styled.a`
	font-weight: bold;

	&:hover,
	&:active,
	&:focus {
		color: ${COLORS.PRIMARY};
	}

	@media (max-width: 1030px) {
		position: relative;
		display: block;
		border-bottom: 2px solid ${COLORS.BORDER_ON_ACCENT};
		padding: 20px;
		/* 下記、表示ナビ幅 - 文字要素のpaddingを引く */
		width: calc(220px - 40px);

		&::before {
			position: absolute;
			bottom: -2px;
			left: 0;
			width: 30px;
			height: 2px;
			display: block;
			content: "";
			background: ${COLORS.PRIMARY};
		}
	}
`;

/* TODO: とぐるだけではないので変数名変更 */
const DIV_HeaderToggleArea = styled.div`
	display: none;

	@media (max-width: 1031px) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: absolute;
		top: 18px;
		right: 25px;
		z-index: 3;
	}

	@media (max-width: 450px) {
		top: 13px;
	}
`;

const DIV_HeaderSns = styled.div`
	display: none;
	@media (max-width: 1030px) {
		display: block;
	}
	&.open {
		display: none;
	}
`;

const DIV_HeaderToggleBtn = styled.div`
	display: none;

	@media (max-width: 1030px) {
		display: block;
		width: 30px;
		height: 30px;
		z-index: 3;
		cursor: pointer;
		position: relative;
		margin-bottom: 2px;

		span {
			display: block;
			position: absolute;
			left: 0;
			width: 30px;
			height: 2px;
			background-color: ${COLORS.TEXT};
			transition: all 0.5s;
			border-radius: 4px;
		}

		span:nth-child(1) {
			top: 8px;
		}

		span:nth-child(2) {
			top: 14px;
		}

		span:nth-child(3) {
			top: 20px;
		}

		&.open span:nth-of-type(1) {
			transform: translateY(6px) rotate(-315deg);
		}
		&.open span:nth-of-type(2) {
			opacity: 0;
		}
		&.open span:nth-of-type(3) {
			transform: translateY(-6px) rotate(315deg);
		}

		&.open {
			top: 0px;
			right: 0px;
		}
	}
`;

const DIV_Mask = styled.div`
	display: block;
	background-color: ${COLORS.MASK};
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: fixed;
	opacity: 0.8;
	cursor: pointer;
`;
