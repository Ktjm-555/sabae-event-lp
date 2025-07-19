import styled from "@emotion/styled";
import { newsList } from "../../../items/news";
import {
	S_DIV_CardContainer,
	S_DIV_SectionWrapper,
	S_SECTION_container,
} from "../../../Style";
import { ContentsTitle } from "../../contents/CotentsTitle";
import { COLORS } from "../../../consts/color";
import { RoundButton } from "../../ui/RoundButton";
import { Link } from "react-router-dom";

export const NewsListPage = () => {
	return (
		<DIV_SectionWrapper>
			<S_SECTION_container>
				<ContentsTitle title="お知らせ" balloonList={[]} />
				<DIV_CardContainer>
					<UL_CardWrapper>
						{newsList.map((news, index) => {
							const isLink = news.url;
							const LinkWrapper = isLink ? A_CardLink : DIV_CardLink;

							return (
								<LI_CardContainer key={index}>
									{/* 本当はdivの場合は、toは不要だが、エラーが出るため */}
									<LinkWrapper to={news.url ?? "/"}>
										<DIV_Date>{news.date}</DIV_Date>
										<P_Title>{news.title}</P_Title>
										{isLink && (
											<RoundButton className="round-button"></RoundButton>
										)}
									</LinkWrapper>
								</LI_CardContainer>
							);
						})}
					</UL_CardWrapper>
				</DIV_CardContainer>
			</S_SECTION_container>
		</DIV_SectionWrapper>
	);
};

const DIV_SectionWrapper = styled(S_DIV_SectionWrapper)`
	padding-top: 140px;
`;

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
	font-size: 18px;
	font-weight: bold;
	color: ${COLORS.PRIMARY};

	@media (max-width: 1000px) {
		font-size: 18px;
	}

	@media (max-width: 500px) {
		font-size: 14px;
	}
`;

const P_Title = styled.p`
	font-size: 20px;
	flex: 1;

	@media (max-width: 1000px) {
		font-size: 18px;
	}

	@media (max-width: 500px) {
		font-size: 16px;
	}
`;

const cardLinkBaseStyle = `
	display: grid;
	grid-template-columns: 130px 1fr 32px;
	align-items: center;
	gap: 30px;
	padding: 30px 0 30px;

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 15px 0 15px;
		gap: 4px;

    .round-button {
      display: none;
    }
	}
`;

const DIV_CardLink = styled.div`
	${cardLinkBaseStyle}
`;

const A_CardLink = styled(Link)`
	${cardLinkBaseStyle}

	&:hover ${DIV_Date}, &:hover ${P_Title} {
		opacity: 0.5;
	}

	&:hover .round-button {
		opacity: 0.8;
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

	@media (max-width: 900px) {
		padding: 6px 16px 16px 16px;
		min-height: 500px;
	}
`;
