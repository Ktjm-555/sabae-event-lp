import styled from "@emotion/styled";
import type { MouseEventHandler } from "react";
import { COLORS } from "../../consts/color";

type Props = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	className?: string;
};

export const RoundButton = ({
	onClick,
	disabled = false,
	className,
}: Props) => {
	return (
		<BUTTON_Button onClick={onClick} disabled={disabled} className={className}>
			<SPAN_Arrow />
		</BUTTON_Button>
	);
};

const BUTTON_Button = styled.button`
	width: 32px;
	height: 32px;
	border: none;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.PRIMARY};
	cursor: pointer;
	transition: background-color 0.2s;
	padding-right: 10px;

	@media (max-width: 500px) {
	}

	&:hover:not(:disabled) {
		opacity: 0.8;
	}

	&:disabled {
		background-color: #f1a0a7;
		cursor: not-allowed;
	}
`;

const SPAN_Arrow = styled.span`
	display: inline-block;
	width: 7px;
	height: 7px;
	border-top: 2px solid white;
	border-right: 2px solid white;
	transform: rotate(45deg);
	vertical-align: middle;
`;
