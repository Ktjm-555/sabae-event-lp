import styled from "@emotion/styled";
import type { MouseEventHandler, ReactNode } from "react";

type Props = {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	isShort?: boolean;
	isArrow?: boolean;
	icon?: string;
};

export const Button = ({
	children,
	onClick,
	disabled = false,
	isShort,
	isArrow = true,
	icon = "",
}: Props) => {
	return (
		<BUTTON_Button
			onClick={onClick}
			disabled={disabled}
			className={isShort ? "short" : ""}
		>
			<span>{children}</span>
			{isArrow && <SPAN_Arrow />}
			{icon && <IMG_Icon src={icon} />}
		</BUTTON_Button>
	);
};

const BUTTON_Button = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 10px 20px;
	border: none;
	border-radius: 60px;
	background-color: #e60012;
	color: white;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.2s;

	&.short {
		padding: 10px 15px;
	}

	@media (max-width: 500px) {
		padding: 6px 18px;
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

const IMG_Icon = styled.img`
	margin-left: 6px;
	width: 25px;
	height: 25px;
`;
