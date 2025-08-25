import styled from "@emotion/styled";
import { COLORS } from "../../consts/color";
type Props = {
	balloonList: Array<string>;
	sunday?: boolean;
};

// 日付 + 時間 + プチ案内
export const Balloon2 = ({ balloonList, sunday }: Props) => (
	<DIV_Balloon>
		<P_Date>
			<SPAN_Blue className={sunday ? "red" : ""}>
				{balloonList[0]}
				<SPAN_CircleBlue className={sunday ? "red" : ""}>
					{balloonList[1]}
				</SPAN_CircleBlue>
			</SPAN_Blue>
			{balloonList[2] && <SPAN_Time>{balloonList[2]}</SPAN_Time>}
			{balloonList[3] && <SPAN_Annotation>{balloonList[3]}</SPAN_Annotation>}
		</P_Date>
	</DIV_Balloon>
);

const DIV_Balloon = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px 5px;
	font-size: 16px;
	background: ${COLORS.CARD_BG};
	border: 1px solid ${COLORS.BORDER};
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
		border-right: 8px solid ${COLORS.CARD_BG}; /* 吹き出しのしっぽを白に */
		filter: drop-shadow(-1px 0 0 ${COLORS.BORDER}); /* 擬似的な枠線をしっぽに */
	}
`;

const P_Date = styled.p`
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
	font-size: 22px;
	line-height: 1;

	@media (max-width: 900px) {
		font-size: 16px;
	}
`;

const SPAN_Blue = styled.span`
	color: #004080;
	display: flex;
	align-items: center;
	gap: 3px;

	&.red {
		color: ${COLORS.PRIMARY};
	}
`;

const SPAN_Time = styled.span`
	font-size: 12px;
	display: flex;
	align-items: center;
	margin-top: 5px;

	@media (max-width: 900px) {
		font-size: 10px;
	}
`;

const SPAN_Annotation = styled.span`
	font-size: 10px;
	display: flex;
	align-items: center;
	margin-top: 3px;

	@media (max-width: 900px) {
		font-size: 8px;
	}
`;

const SPAN_CircleBlue = styled.span`
	background: #004080;
	color: white;
	font-size: 12px;
	border-radius: 50%;
	width: 22px;
	height: 22px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		font-size: 10px;
		width: 16px;
		height: 16px;
	}

	&.red {
		background: ${COLORS.PRIMARY};
	}
`;
