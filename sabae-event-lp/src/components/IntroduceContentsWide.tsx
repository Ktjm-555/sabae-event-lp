import styled from "@emotion/styled";
import { Contents4 } from "./contents/Contents4.tsx";
import { S_DIV_SectionWrapper, S_SECTION_container } from "../Style.ts";
import { COLORS } from "../consts/color.ts";

export const IntroduceContentsWide = () => {
	return (
		<DIV_Wrapper>
			<S_SECTION_container>
				<Contents4 title="さばえ３大フェス" balloonList={[]} />
			</S_SECTION_container>
		</DIV_Wrapper>
	);
};

const DIV_Wrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_GRAY_BG};
	/* 上の要素に少し重ねるようなデザイン */
	padding-top: 220px;
	margin-top: -240px;
`;
