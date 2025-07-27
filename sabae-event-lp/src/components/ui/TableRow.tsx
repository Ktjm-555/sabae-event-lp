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
	padding: 10px;
	border-bottom: 1px solid ${COLORS.BORDER};

	&.info-top {
		border-top: 1px solid ${COLORS.BORDER};
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
`;

const DD_InfoDetail = styled.dd`
	display: flex;
	align-items: center;
	/* DD_InfoDetailはtitleほど広がっていない */
	padding: 10px;
`;
