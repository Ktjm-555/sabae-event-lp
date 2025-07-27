import React from "react";
import styled from "@emotion/styled";

type Props = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: Props) => {
	if (!isOpen) return null;

	return (
		<Overlay onClick={onClose}>
			<Content onClick={(e) => e.stopPropagation()}>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</Content>
		</Overlay>
	);
};

const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const Content = styled.div`
	background: white;
	padding: 20px;
	border-radius: 8px;
	position: relative;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 8px;
	right: 12px;
	font-size: 20px;
	border: none;
	background: none;
	cursor: pointer;
`;
