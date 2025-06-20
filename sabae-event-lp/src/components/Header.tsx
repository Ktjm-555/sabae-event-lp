import styled from "@emotion/styled";
import { DIV_container } from "../Style.ts";
import { COLORS } from "../consts/color.ts";

export const Header = () => {
	return (
		<>
			<DIV_HeaderWrapper>
				<DIV_HeaderContainer>
					{/* TODO: 下記削除する予定 */}
					<div>ヘッダーエリア</div>
					{/* ロゴエリア */}

					{/* ナビゲーション */}

					{/* ハンバーガーアイコン */}
				</DIV_HeaderContainer>
			</DIV_HeaderWrapper>
		</>
	);
};
const DIV_HeaderWrapper = styled.div`
	background-color: ${COLORS.HEADER};
	color: ${COLORS.HEADER_TEXT};
`;

const DIV_HeaderContainer = styled(DIV_container)`
	display: flex;
	align-items: center;
	height: 60px;
`;
