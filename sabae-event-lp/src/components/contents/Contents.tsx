import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";

type Props = {
	title: string;
	caption?: string;
	balloonList: Array<string>;
	imgSrc: string;
};

export const Contents = ({ title, caption, imgSrc, balloonList }: Props) => {
	return (
		<div>
			<ContentsTitle
				title={title}
				caption={caption}
				balloonList={balloonList}
			/>
			<IMG_Image src={imgSrc} alt="ブースの画像" />
		</div>
	);
};

const IMG_Image = styled.img`
	width: 100%;
`;
