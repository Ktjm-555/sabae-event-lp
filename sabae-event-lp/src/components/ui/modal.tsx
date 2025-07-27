import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../../consts/color";

type Props = {
	title: string;
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal = ({ title, isOpen, onClose, children }: Props) => {
	if (!isOpen) return null;

	return (
		<DIV_Overlay onClick={onClose}>
			<DIV_Content onClick={(e) => e.stopPropagation()}>
				<DIV_TitleContainer>
					<h2>{title}</h2>
					<IMG_CloseButton
						onClick={onClose}
						src={`${import.meta.env.BASE_URL}icon/close.svg`}
					/>
				</DIV_TitleContainer>
				<DIV_Contents>{children}</DIV_Contents>
			</DIV_Content>
		</DIV_Overlay>
	);
};

const DIV_Content = styled.div`
	background: white;
	border-radius: 4px;
	position: relative;
	width: 80%;
	max-width: 1000px;
`;

const DIV_Overlay = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const DIV_TitleContainer = styled.div`
	padding: 15px;
	border-bottom: 1px solid ${COLORS.BORDER};

	h2 {
		font-family: "Noto Sans", sans-serif;
		line-height: 1;
		font-size: 28px;
	}

	@media (max-width: 500px) {
		h2 {
			font-size: 20px;
		}
	}
`;

const DIV_Contents = styled.div`
	padding: 15px;
`;

const IMG_CloseButton = styled.img`
	position: absolute;
	top: 20px;
	right: 16px;
	width: 20px;
	height: 20px;

	border: none;
	background: none;
	cursor: pointer;
`;
