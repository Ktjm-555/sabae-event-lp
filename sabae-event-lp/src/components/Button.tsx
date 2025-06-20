import styled from "@emotion/styled";
import type { MouseEventHandler, ReactNode } from "react";

type Props = {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
};

export const Button = ({ children, onClick, disabled = false }: Props) => {
	return (
		<BUTTON_Button onClick={onClick} disabled={disabled}>
			{children}
		</BUTTON_Button>
	);
};

const BUTTON_Button = styled.button`
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	background-color: #0070f3;
	color: white;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover:not(:disabled) {
		background-color: #005bb5;
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;
