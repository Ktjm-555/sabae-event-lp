import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { S_DIV_CardContainer } from "../Style";
import { TEXT_M, TEXT_S } from "../consts/typography";
import { COLORS } from "../consts/color";
import { newsList } from "../consts/news";
import { Button } from "./Button";

export const NewsContents = () => {
	const goToNewsDetailPage = () => {
		window.open("https://www.sabae-sdgs.jp/news/2080/");
	};

	return (
		<DIV_SectionContainer>
			<ContentsTitle title="お知らせ" balloonList={[]} />
			<div>
				<UL_CardWrapper>
					{newsList.slice(0, 3).map((news, index) => {
						const isLink = news.url;
						const LinkWrapper = isLink ? A_CardLink : DIV_CardLink;

						return (
							<LI_CardContainer key={index}>
								<LinkWrapper {...(isLink ? { href: news.url } : {})}>
									<DIV_Date>{news.date}</DIV_Date>
									<P_Title>{news.title}</P_Title>
								</LinkWrapper>
							</LI_CardContainer>
						);
					})}
				</UL_CardWrapper>

				<Button onClick={goToNewsDetailPage}>お知らせ一覧</Button>
			</div>
		</DIV_SectionContainer>
	);
};

const LI_CardContainer = styled(S_DIV_CardContainer.withComponent("li"))`
	padding: 0px;
	margin-bottom: 25px;
`;

const UL_CardWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	margin-top: 20px;
`;

const DIV_Date = styled.div`
	${TEXT_S}
	font-weight: bold;
	color: ${COLORS.PRIMARY};
`;

const P_Title = styled.p`
	${TEXT_M}
`;

const DIV_CardLink = styled.div`
	display: block;
	padding: 20px;
`;

// NOTE: withComponent('a') を使えば、タグを div → a に変えられる。
const A_CardLink = styled(DIV_CardLink.withComponent("a"))`
	&:hover ${DIV_Date}, &:hover ${P_Title} {
		opacity: 0.5;
	}

	${P_Title} {
		text-decoration: underline 1px;
		text-underline-offset: 3px;
	}
`;

const DIV_SectionContainer = styled.div`
	margin-bottom: 70px;
`;
