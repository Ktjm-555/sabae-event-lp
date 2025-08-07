import styled from "@emotion/styled";
import { Balloon } from "../ui/Balloon";
import { COLORS } from "../../consts/color";

type Props = {
	title: string;
	caption?: string;
	balloonList: Array<string>;
	annotation?: string;
};

// TODO: タイトルこちらに統合したい
export const ContentsTitleOnly = ({ title, balloonList }: Props) => {
	return (
		<div>
			<DIV_TitleContainer>
				<H1_Title dangerouslySetInnerHTML={{ __html: title }} />
				{balloonList.length > 0 && <Balloon balloonList={balloonList} />}
			</DIV_TitleContainer>
		</div>
	);
};

const DIV_TitleContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	border-bottom: 3px solid ${COLORS.BORDER_ON_ACCENT};
	padding-bottom: 0.4em;
	margin-bottom: 30px;

	@media (max-width: 1100px) {
		margin-bottom: 20px;
	}

	@media (max-width: 800px) {
		margin-bottom: 15px;
	}

	@media (max-width: 500px) {
		margin-bottom: 10px;
	}
`;

const H1_Title = styled.h1`
	/* 見出ししたのボーダのマーク */
	&::before {
		position: absolute;
		bottom: -3px;
		left: 0;
		width: 60px;
		height: 3px;
		display: block;
		content: "";
		background: ${COLORS.PRIMARY};
	}
`;
