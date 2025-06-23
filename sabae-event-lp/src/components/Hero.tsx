import styled from "@emotion/styled";

export const Hero = () => {
	return (
		<>
			<SECTION_HeroContainer id="1">
				<IMG_Image src="images/MV.png" alt="フェスのメイン画像" />
				<IMG_Image_SP src="images/MV_SP.png" alt="フェスのメイン画像" />
				<IMG_Image_SP2 src="images/MV_SP2.png.png" alt="フェスのメイン画像" />
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
		height: auto;
		object-fit: contain;
	}

	@media (max-width: 650px) {
		height: 100vh;
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 450px) {
		display: none;
	}
`;

const IMG_Image_SP2 = styled.img`
	display: none;
	@media (max-width: 450px) {
		display: block;
		width: 100%;
	}
`;
