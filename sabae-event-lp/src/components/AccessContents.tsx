import styled from "@emotion/styled";
import { S_SECTION_container, S_DIV_SectionWrapper } from "../Style.ts";

import { ContentsTitle } from "./contents/CotentsTitle.tsx";
import { COLORS } from "../consts/color.ts";

export const AccessContents = () => {
	return (
		<DIV_EventWrapper>
			<S_SECTION_container>
				<DIV_ContentsContainer>
					<div>
						<ContentsTitle title="会場マップ" caption="" balloonList={[]} />
					</div>
				</DIV_ContentsContainer>
			</S_SECTION_container>
		</DIV_EventWrapper>
	);
};

const DIV_EventWrapper = styled(S_DIV_SectionWrapper)`
	background-color: ${COLORS.SEC_NORMAL_BG};
	@media (max-width: 900px) {
		padding-bottom: 40px;
	}
	@media (max-width: 500px) {
		padding-bottom: 20px;
	}
`;

const DIV_ContentsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 50px;
	grid-auto-rows: 1fr;
	margin-bottom: 60px;

	@media (max-width: 900px) {
		margin-bottom: 40px;
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 800px) {
		grid-template-columns: none;
		grid-auto-rows: auto;
	}

	@media (max-width: 500px) {
		margin-bottom: 20px;
	}
`;
