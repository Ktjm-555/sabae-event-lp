import styled from "@emotion/styled";
import {
	S_DIV_CardContainer,
	S_DIV_CardHeaderContainer,
	S_DIV_SectionWrapper,
	S_H2_Title,
	S_P_Description,
} from "../../Style";
import { Button } from "../ui/Button";
import { ContentsTitleOnly } from "./CotentsTitleOnly";

export const Contents4 = () => {
	const goToSabaeEightPage = () => {
		window.open("https://meganefes.com/", "_blank");
	};

	return (
		<DIV_SectionWrapper>
			<ContentsTitleOnly title="同時開催" balloonList={[]} />

			<DIV_CardsWrapper>
				<SECTION_CardContainer>
					<S_DIV_CardHeaderContainer>
						<H2_Title>めがねフェス</H2_Title>
					</S_DIV_CardHeaderContainer>
					<P_Description>
						「めがねよ、ありがとう」を合言葉に、全国からめがね好きが集まるめがねの感謝祭。めがね供養をはじめ、めがねの製造工程をユニークに展示・体験する「メガ展」、産地の最新めがねなどの販売、ステージ、グルメまで、めがねづくしのイベントです。
					</P_Description>
					<DIV_Spacer />
					<DIV_CardFooter>
						<Button onClick={goToSabaeEightPage}>公式サイト</Button>
						<div>
							<A_Icon
								href="https://x.com/meganefes"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/twitter-x.svg`}
									alt="めがねフェスのtwitter-xのアイコン"
								/>
							</A_Icon>
							<A_Icon
								href="https://www.instagram.com/meganefes/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/instagram.svg`}
									alt="めがねフェスのinstagramのアイコン"
								/>
							</A_Icon>
							<A_Icon
								href="https://www.facebook.com/meganefes"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/facebook.svg`}
									alt="めがねフェスのfacebookのアイコン"
								/>
							</A_Icon>
							<A_Icon
								href="https://m.youtube.com/channel/UCDwHawMHi7yeLzSSof8bvDQ"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IMG_Icon
									src={`${import.meta.env.BASE_URL}icon/youtube.svg`}
									alt="めがねフェスのYoutubeのアイコン"
								/>
							</A_Icon>
						</div>
					</DIV_CardFooter>
				</SECTION_CardContainer>

				<SECTION_CardContainer>
					<S_DIV_CardHeaderContainer>
						<H2_Title>さばえ門前まつり</H2_Title>
					</S_DIV_CardHeaderContainer>
					<P_Description>
						「さばえの歴史と文化を伝えるフェス」をテーマに、江戸時代、間部家の門前町として栄えたまちなかを空間演出し、鯖江市の歴史・伝統・文化の魅力を見て、知って、体感できるまつりです。
					</P_Description>
					<DIV_Spacer />
					<DIV_IconContainer>
						<A_Icon
							href="https://www.instagram.com/sabaemonzenmatsuri/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IMG_Icon
								src={`${import.meta.env.BASE_URL}icon/instagram.svg`}
								alt="さばえ門前まつりのinstagramのアイコン"
							/>
						</A_Icon>
						<A_Icon
							href="https://www.facebook.com/profile.php?id=61560310619817"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IMG_Icon
								src={`${import.meta.env.BASE_URL}icon/facebook.svg`}
								alt="さばえ門前まつりのfacebookのアイコン"
							/>
						</A_Icon>
					</DIV_IconContainer>
				</SECTION_CardContainer>
			</DIV_CardsWrapper>
		</DIV_SectionWrapper>
	);
};
const DIV_Spacer = styled.div`
	flex-grow: 1;
`;

const SECTION_CardContainer = styled(
	S_DIV_CardContainer.withComponent("section")
)`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const H2_Title = styled(S_H2_Title)`
	font-size: 22px;
`;

const DIV_CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	grid-auto-rows: 1fr;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
	}
`;

const DIV_CardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	/* ここだけレスポンシブ例外対応(A)() */
	@media (max-width: 1210px) and (min-width: 1201px) {
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
		gap: 20px;
		margin-top: 20px;
	}
`;

const DIV_IconContainer = styled.div`
	margin-left: auto;
`;

const IMG_Icon = styled.img`
	width: 32px;
	height: 32px;
`;

const A_Icon = styled.a`
	display: inline-block;
	margin-left: 8px;

	&:hover {
		opacity: 0.6;
	}
`;

const P_Description = styled(S_P_Description)`
	margin-bottom: 20px;
`;

const DIV_SectionWrapper = styled(S_DIV_SectionWrapper)`
	padding-bottom: 0px;
	@media (max-width: 900px) {
		padding-bottom: 0px;
	}
`;
