import styled from "@emotion/styled";

export const Balloon = () => (
	<DIV_Balloon>
		<P_Date>
			<SPAN_Blue>
				9/20<SPAN_CircleBlue>土</SPAN_CircleBlue>
			</SPAN_Blue>
			<SPAN_Red>
				21<SPAN_CircleRed>日</SPAN_CircleRed>
			</SPAN_Red>
		</P_Date>
	</DIV_Balloon>
);

const DIV_Balloon = styled.div`
	position: relative;
	display: inline-block;
	padding: 10px 5px;
	color: #ccc;
	font-size: 16px;
	background: #fff;
	border: 1px solid #ccc;
	border-radius: 10px;
	margin-left: 15px;
	height: 40px;

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: -8px;
		transform: translateY(-50%);
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-right: 8px solid #fff; /* 吹き出しのしっぽを白に */
		filter: drop-shadow(-1px 0 0 #ccc); /* 擬似的な枠線をしっぽに */
	}
`;

const P_Date = styled.p`
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
	font-size: 20px;
	line-height: 1;
`;

const SPAN_Blue = styled.span`
	color: #004080;
	display: flex;
	align-items: center;
	gap: 2px;
`;

const SPAN_Red = styled.span`
	color: #e60012;
	display: flex;
	align-items: center;
	gap: 2px;
	margin-left: auto;
`;

const SPAN_CircleBlue = styled.span`
	background: #004080;
	color: white;
	font-size: 10px;
	border-radius: 50%;
	width: 15px;
	height: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2px;
`;

const SPAN_CircleRed = styled(SPAN_CircleBlue)`
	background: #e60012;
`;
