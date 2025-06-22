import styled from "@emotion/styled";

export const Hero = () => {
	return (
		<>
			<SECTION_HeroContainer id="1">
				<IMG_Image src="images/MV.png" alt="フェスのメイン画像" />
				<IMG_Image_SP src="images/MV_SP.png" alt="フェスのメイン画像" />
			</SECTION_HeroContainer>
		</>
	);
};

const SECTION_HeroContainer = styled.section`
	width: 100%;
`;

const IMG_Image = styled.img`
	width: 100%;

	@media (max-width: 800px) {
		display: none;
	}
`;

const IMG_Image_SP = styled.img`
	display: none;

	@media (max-width: 800px) {
		display: block;
		width: 100%;
	}
`;
