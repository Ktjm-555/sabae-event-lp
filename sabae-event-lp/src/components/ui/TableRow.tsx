import styled from "@emotion/styled";
import { COLORS } from "../../consts/color";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	title: string;
	top?: boolean;
};

export const TableRow = ({ children, title, top = false }: Props) => {
	return (
		<DIV_Info className={top ? "info-top" : ""}>
			<DT_InfoTitle dangerouslySetInnerHTML={{ __html: title }}></DT_InfoTitle>
			<DD_InfoDetail>{children}</DD_InfoDetail>
		</DIV_Info>
	);
};

const DIV_Info = styled.dl`
	display: flex;
	gap: 20px;
	padding: 10px 0;
	border-bottom: 1px solid ${COLORS.BORDER};

	&.info-top {
		border-top: 1px solid ${COLORS.BORDER};
	}

	@media (max-width: 650px) {
		flex-direction: column;
		gap: 0;
		padding: 8px 0;
	}
`;

const DT_InfoTitle = styled.dt`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 170px;
	/* グレーのところ圧迫されても縮まないようにするため */
	flex-shrink: 0;
	min-height: 58px;
	background-color: #efefef;
	font-weight: bold;

	@media (max-width: 650px) {
		width: auto;
		min-height: auto;
		padding: 8px 15px;
		justify-content: flex-start;

		br {
			display: none;
		}
	}
`;

const DD_InfoDetail = styled.dd`
	display: flex;
	align-items: center;
	/* DD_InfoDetailはtitleほど広がっていない */
	padding: 10px;

	@media (max-width: 650px) {
		font-size: 14px;
		padding: 8px;
		// DIV_Infoのpaddingで20でかかってしまい、
		// 文字が上に浮くため、0にする。
		padding-bottom: 0px;
	}
`;
