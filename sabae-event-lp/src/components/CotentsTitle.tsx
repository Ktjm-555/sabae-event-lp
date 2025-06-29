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
				{/* ルビ使用のためspanタグを使用する際は、下のCSS確認 */}
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
		background: ${COLORS.PRIMARY};
	}

	/* spanタグでルビ振っている */
	/* TODO(再考する？)：∞が他の文字よりも小さいため、それを大きくするとrubyではうまく実装できず。*/
	/* span {
		position: relative;
	} */

	/* span > span:nth-child(1) {
		position: absolute;
		top: -10px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 15px;
		white-space: nowrap;
		font-weight: 400;

		@media (max-width: 900px) {
			font-size: 11px;
			top: -8px;
		}

		@media (max-width: 500px) {
			font-size: 9px;
			top: -6px;
		}
	}

	span > span:nth-child(2) {
		display: inline-block;
		vertical-align: -7px;
		font-size: 85px;
		font-weight: 400;
		line-height: 0;

		@media (max-width: 900px) {
			vertical-align: -12px;
			font-size: 60px;
		}

		@media (max-width: 500px) {
			vertical-align: -10px;
			font-size: 47px;
		}
	} */
	/* ここまでルビ */

	// TODO:使うかもなので一旦取っておく改行調整
	/* .br-sp {
		display: none;
	}

	@media (max-width: 415px) {
		.br-sp {
			display: inline;
		}
	} */
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
