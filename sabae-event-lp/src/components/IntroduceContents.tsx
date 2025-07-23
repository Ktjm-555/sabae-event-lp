import styled from "@emotion/styled";
import { S_SECTION_container, S_DIV_SectionWrapper } from "../Style.ts";
import { Contents3 } from "./contents/Contents3.tsx";
import { COLORS } from "../consts/color.ts";
import { Contents4 } from "./contents/Contents4.tsx";

export const IntroduceContents = () => {
	return (
		<>
			<DIV_IntroduceWrapper>
				<S_SECTION_container>
					{/* TODO(再考する？)：トリッキーだが、∞の文字の大きさとルビの距離が両立できないため、一旦この書き方に */}
					{/* title="さばえアクション<span><span>エイト</span><span>∞</span></span>とは" */}
					<Contents3 />
					<Contents4 title="さばえ３大フェス" balloonList={[]} />
				</S_SECTION_container>
			</DIV_IntroduceWrapper>
		</>
	);
};

const DIV_IntroduceWrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_GRAY_BG};
`;

const SECTION_container = styled(S_SECTION_container)``;
