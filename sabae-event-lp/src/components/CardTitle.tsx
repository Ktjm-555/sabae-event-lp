import styled from "@emotion/styled";
import React from "react";
import { COLORS } from "../consts/color";

type Props = {
	title: string;
	label?: string;
	labelNum?: number;
	annotation?: string;
};

export const CardTitle = ({ title, label, labelNum, annotation }: Props) => {
	return (
		<DIV_CardTitleContainer label={label}>
			{label && (
				<P_TitleLabel>
					{label}
					<br />第{labelNum}弾
				</P_TitleLabel>
			)}

			<div>
				<H2_Title>
					{title.split("\n").map((line, i) => (
						<React.Fragment key={i}>
							{line}
							<br />
						</React.Fragment>
					))}
				</H2_Title>
				{annotation && <SPAN_Annotation>{annotation}</SPAN_Annotation>}
			</div>
		</DIV_CardTitleContainer>
	);
};

const DIV_CardTitleContainer = styled.div<{ label?: string }>`
	display: flex;
	align-items: center;
	${({ label }) => label && `height: 50px;`}
	${({ label }) => `margin-bottom: ${label ? "20px" : "10px"};`}
	line-height: 1;

	@media (max-width: 900px) and (min-width: 801px), (max-width: 410px) {
		display: block;
		height: auto;
		margin-bottom: 10px;
	}
`;

const P_TitleLabel = styled.p`
	background-color: ${COLORS.PRIMARY};
	color: ${COLORS.TEXT_ON_ACCENT};
	padding: 6px;
	font-size: 15px;
	font-weight: bold;
	text-align: center;
	line-height: 1.4;
	display: inline-block;
	margin-right: 10px;
	min-width: 80px;

	@media (max-width: 900px) {
		padding: 3px 6px;
		font-size: 14px;
	}

	@media (max-width: 500px) {
		font-size: 12px;
	}
`;

const H2_Title = styled.h2`
	font-size: 22px;
	font-weight: bold;

	/* ここ修正時：S_P_Subtitleがある場合はそれも直す必要あり！ */
	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1160px) {
		font-size: 18px;
	}

	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 1040px) {
		font-size: 16px;
	}

	@media (max-width: 900px) {
		margin-top: 10px;
	}
	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 800px) {
		margin-top: 0;
	}
	/* ここだけレスポンシブ例外対応 */
	@media (max-width: 410px) {
		margin-top: 10px;
	}
`;

const SPAN_Annotation = styled.span`
	display: block;
	font-size: 14px;
	font-weight: bold;

	@media (max-width: 960px) {
		font-size: 13px;
	}
`;
