import styled from "@emotion/styled";
import { Balloon } from "./Balloon";
import { COLORS } from "../consts/color";

type Props = {
	title: string;
	caption?: string;
	balloonList: Array<string>;
	annotation?: string;
};

export const ContentsTitle = ({
	title,
	caption,
	balloonList,
	annotation,
}: Props) => {
	return (
		<div>
			<DIV_TitleContainer>
				{/* 静的なテキストなため問題なし brを考慮し、下記をdanger...を使用 */}
				<H1_Title dangerouslySetInnerHTML={{ __html: title }} />
				{balloonList.length > 0 && <Balloon balloonList={balloonList} />}
			</DIV_TitleContainer>
			{caption && (
				<P_Caption>
					{caption} <SPAN_Annotation>{annotation}</SPAN_Annotation>
				</P_Caption>
			)}
		</div>
	);
};

const DIV_TitleContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	border-bottom: 3px solid #e6e6e6;
	padding-bottom: 0.4em;
	margin-bottom: 14px;
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
		background: #e60012;
	}

	.br-sp {
		display: none;
	}

	@media (max-width: 500px) {
		.br-sp {
			display: inline;
		}
	}
`;

const SPAN_Annotation = styled.span`
	font-size: 12px;

	@media (max-width: 900px) {
		display: block;
		margin-bottom: 10px;
	}

	@media (max-width: 500px) {
		font-size: 10px;
	}
`;

const P_Caption = styled.p`
	color: ${COLORS.TEXT};
	min-height: 70px;
	margin-bottom: 20px;
`;
