import styled from "@emotion/styled";
import { Contents4 } from "./Contents4.tsx";
import { DIV_container } from "../Style.ts";
import { COLORS } from "../consts/color.ts";

export const IntroduceContentsWide = () => {
	return (
		<SECTION_IntroduceContainer>
			<DIV_ContentsContainer>
				<Contents4 title="さばえ３大フェス" balloonList={[]} />
			</DIV_ContentsContainer>
		</SECTION_IntroduceContainer>
	);
};

/* 背景が画面幅のため、sectionを継承しない */
const SECTION_IntroduceContainer = styled.div`
	background-color: ${COLORS.SEC_GRAY_BG};
	/* 上の要素に少し重ねるようなデザイン */
	padding-top: 220px;
	margin-top: -240px;
	padding-bottom: 65px;
`;

const DIV_ContentsContainer = styled(DIV_container)``;
