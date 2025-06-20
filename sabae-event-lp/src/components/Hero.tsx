import styled from "@emotion/styled";

export const Hero = () => {
	return (
		<>
			<SECTION_HeroContainer>
				<IMG_Image src="images/MV.png" />
			</SECTION_HeroContainer>
		</>
	);
};

const SECTION_HeroContainer = styled.section`
	width: 100%;

	@media (max-width: 900px) {
	}
`;

const IMG_Image = styled.img`
	width: 100%;

	@media (max-width: 900px) {
	}
`;
