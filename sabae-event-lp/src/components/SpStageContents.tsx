import styled from "@emotion/styled";
import { S_SECTION_container, S_DIV_SectionWrapper } from "../Style.ts";
import { Contents2 } from "./contents/Contents2.tsx";
import { COLORS } from "../consts/color.ts";

export const SpStageContents = () => {
	return (
		<DIV_EventWrapper>
			<S_SECTION_container>
				<Contents2 />
			</S_SECTION_container>
		</DIV_EventWrapper>
	);
};

const DIV_EventWrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_BLUE_BG};
	padding-top: 50px;
	padding-bottom: 30px;
	@media (max-width: 900px) {
		padding-top: 40px;
		padding-bottom: 20px;
	}
	@media (max-width: 500px) {
		padding-top: 30px;
		padding-bottom: 10px;
	}
`;
