import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";

type Props = {
	title: string;
	caption: string;
	hasBalloon: boolean;
	imgSrc: string;
};

export const Contents = ({ title, caption, imgSrc, hasBalloon }: Props) => {
	return (
		<div>
			<ContentsTitle title={title} caption={caption} hasBalloon={hasBalloon} />
			<IMG_Image src={imgSrc} />
		</div>
	);
};

const IMG_Image = styled.img`
	width: 100%;
	height: 330px;
	object-fit: cover;
`;
