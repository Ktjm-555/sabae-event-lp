import styled from "@emotion/styled";
import { Button } from "./Button";
import { DIV_container } from "../Style";

export const Hero = () => {
	const handleClick = () => {
		alert("クリックされました！");
	};
	return (
		<>
			<SECTION_HeroWrapper>
				<SECTION_HeroContainer>
					<DIV_Content>
						<H1_CatchCopy>ダミーコピー</H1_CatchCopy>
						<P_SubCopy>ダミーサブコピー</P_SubCopy>
						<Button onClick={handleClick}>はじめる</Button>
					</DIV_Content>
					<IMG_Image src="dummy.png" />
				</SECTION_HeroContainer>
			</SECTION_HeroWrapper>
		</>
	);
};

const SECTION_HeroWrapper = styled.section`
	background-color: #f5f5f5;
`;
const SECTION_HeroContainer = styled(DIV_container)`
	display: flex;
	text-align: left;
	padding: 100px 60px;

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 80px 20px;
	}
`;

const DIV_Content = styled.div`
	flex: 1;
`;

const H1_CatchCopy = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 1rem;

	@media (max-width: 900px) {
		font-size: 2rem;
	}
`;

const P_SubCopy = styled.p`
	font-size: 1.1rem;
	margin-bottom: 2rem;
	color: #555;
`;

const IMG_Image = styled.img`
	width: 100%;
	max-width: 400px;
	height: auto;
	margin-left: 60px;

	@media (max-width: 900px) {
		margin-left: 0;
		margin-top: 40px;
	}
`;
