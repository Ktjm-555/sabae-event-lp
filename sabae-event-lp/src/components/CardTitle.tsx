import styled from "@emotion/styled";

type Props = {
	title: string;
	label: string;
	labelNum: number;
	annotation?: string;
};

export const CardTitle = ({ title, label, labelNum, annotation }: Props) => {
	return (
		<DIV_CardTitleContainer>
			<P_TitleLabel>
				{label}
				<br />第{labelNum}弾
			</P_TitleLabel>
			<div>
				<H2_Title>{title}</H2_Title>
				<SPAN_Annotation>{annotation}</SPAN_Annotation>
			</div>
		</DIV_CardTitleContainer>
	);
};

const DIV_CardTitleContainer = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	margin-bottom: 20px;

	@media (max-width: 900px) {
		display: block;
		height: auto;
		margin-bottom: 10px;
	}

	@media (max-width: 800px) {
		display: flex;
		align-items: center;
		height: 50px;
		margin-bottom: 20px;
	}
`;

const P_TitleLabel = styled.p`
	background-color: red;
	color: #fff;
	padding: 6px 12px;
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	line-height: 1.4;
	display: inline-block;
	margin-right: 25px;
	min-width: 70px;

	@media (max-width: 500px) {
		font-size: 14px;
	}
`;

const H2_Title = styled.h2`
	font-size: 22px;
	font-weight: bold;

	@media (max-width: 1150px) {
		font-size: 18px;
	}

	@media (max-width: 960px) {
		font-size: 16px;
	}

	@media (max-width: 900px) {
		margin-top: 10px;
	}

	@media (max-width: 800px) {
		margin-top: 0;
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
