import styled from "@emotion/styled";
import { COLORS } from "../consts/color.ts";

export const Header = () => {
	return (
		<DIV_HeaderWrapper>
			<DIV_HeaderContainer>
				<div>ヘッダーエリア</div>
				{/* ロゴエリア */}

				{/* ナビゲーション */}

				{/* ハンバーガーアイコン */}
			</DIV_HeaderContainer>
		</DIV_HeaderWrapper>
	);
};

const DIV_HeaderWrapper = styled.div`
	position: fixed;
	color: ${COLORS.TEXT};
	width: 100%;
	z-index: 1000;
`;

const DIV_HeaderContainer = styled.div`
	background-color: ${COLORS.HEADER};
	display: flex;
	align-items: center;
	margin: 20px;
	padding: 25px;
`;
