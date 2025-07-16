import styled from "@emotion/styled";
import { newsList } from "../../../consts/news";
import {
	S_DIV_CardContainer,
	S_DIV_SectionWrapper,
	S_SECTION_container,
} from "../../../Style";
import { ContentsTitle } from "../../contents/CotentsTitle";
import { COLORS } from "../../../consts/color";
import { TEXT_M, TEXT_S } from "../../../consts/typography";

export const NewsListPage = () => {
	return (
		<S_DIV_SectionWrapper>
			<S_SECTION_container>
				<ContentsTitle title="お知らせ" balloonList={[]} />
				<DIV_CardContainer>
					<UL_CardWrapper>
						{newsList.map((news, index) => {
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
				</DIV_CardContainer>
			</S_SECTION_container>
		</S_DIV_SectionWrapper>
	);
};

const LI_CardContainer = styled.li`
	padding: 0px;
	display: block;
	list-style: none;
	border-bottom: 1px solid ${COLORS.BORDER};
`;

const UL_CardWrapper = styled.ul`
	display: block;
	margin-top: 0;
	margin-bottom: 14px;
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
	padding: 30px;
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

const DIV_CardContainer = styled(S_DIV_CardContainer)`
	// リストの上部パッディングを考慮
	padding: 0px 30px 30px 30px;
	min-height: 675px;
`;
