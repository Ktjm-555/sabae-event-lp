import styled from "@emotion/styled";
import { Contents4 } from "./Contents4.tsx";
import { DIV_container } from "../Style.ts";

export const IntroduceContentsWide = () => {
	return (
		<SECTION_IntroduceContainer>
			<DIV_ContentsContainer>
				<P_Subtitle>同時開催</P_Subtitle>
				<Contents4 title="さばえ３大フェス" balloonList={[]} />
			</DIV_ContentsContainer>
		</SECTION_IntroduceContainer>
	);
};

/* 背景が画面幅のため、sectionを継承しない */
const SECTION_IntroduceContainer = styled.div`
	background-color: #f4f4f4;
	/* 上の要素に少し重ねるようなデザイン */
	padding-top: 220px;
	margin-top: -240px;
	padding-bottom: 65px;
`;

const DIV_ContentsContainer = styled(DIV_container)``;

const P_Subtitle = styled.p`
	font-weight: 500;
	font-size: 24px;
`;

// const DIV_ContentsContainer = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(2, 1fr);
// 	gap: 50px;
// 	grid-auto-rows: 1fr;
// 	margin-bottom: 70px;

// 	@media (max-width: 900px) {
// 		margin-bottom: 40px;
// 	}

// 	@media (max-width: 800px) {
// 		grid-template-columns: none;
// 		grid-auto-rows: auto;
// 	}

// 	@media (max-width: 500px) {
// 		margin-bottom: 20px;
// 	}
// `;
