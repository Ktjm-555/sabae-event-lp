import styled from "@emotion/styled";

type Props = {
	caption?: string;
	annotation?: string;
};

export const TitleCaption = ({ caption, annotation }: Props) => {
	return (
		<div>
			{caption && (
				<P_Caption>
					{caption}{" "}
					{annotation && <SPAN_Annotation>{annotation}</SPAN_Annotation>}
				</P_Caption>
			)}
		</div>
	);
};

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
	margin-bottom: 20px;

	@media (max-width: 800px) {
		min-height: auto;
	}

	@media (max-width: 500px) {
		margin-bottom: 10px;
	}
`;
