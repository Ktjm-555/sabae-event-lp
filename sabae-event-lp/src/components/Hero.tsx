import styled from "@emotion/styled";

export const Hero = () => {
	return (
		<>
			<SECTION_HeroContainer id="1">
				<IMG_Image src="images/MV.png" alt="フェスのメイン画像" />
			</SECTION_HeroContainer>
		</>
	);
};

const SECTION_HeroContainer = styled.section`
	width: 100%;
`;

const IMG_Image = styled.img`
	width: 100%;
`;
