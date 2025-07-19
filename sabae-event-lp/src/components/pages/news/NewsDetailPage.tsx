import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { newsList } from "../../../items/news";
import {
	S_DIV_CardContainer,
	S_DIV_SectionWrapper,
	S_SECTION_container,
} from "../../../Style";
import { ContentsTitle } from "../../contents/CotentsTitle";
import { COLORS } from "../../../consts/color";
import { NewsDetailTypeA } from "../../contents/NewsDetailBodies";

export const NewsDetailPage = () => {
	const { newsId } = useParams();
	const id = Number(newsId);
	const news = newsList.find((item) => item.id === id);

	const renderBody = () => {
		if (news) {
			switch (news.type) {
				case "A":
					return <NewsDetailTypeA news={news} />;
				case "B":
					return <p>タイプ未対応</p>;
				case "C":
					return <p>タイプ未対応</p>;
				default:
					return <p>タイプ未対応</p>;
			}
		}
	};
	return (
		<DIV_SectionWrapper>
			<S_SECTION_container>
				<ContentsTitle title="お知らせ" balloonList={[]} />
				{news ? (
					<DIV_CardContainer>
						<DIV_CardHeaderContainer>
							<DIV_Date>{news?.date}</DIV_Date>
							<P_Title>{news?.title}</P_Title>
						</DIV_CardHeaderContainer>
						{renderBody()}
					</DIV_CardContainer>
				) : (
					<p>該当のお知らせが見つかりません。</p>
				)}
			</S_SECTION_container>
		</DIV_SectionWrapper>
	);
};

const DIV_SectionWrapper = styled(S_DIV_SectionWrapper)`
	padding-top: 140px;
`;

const DIV_CardHeaderContainer = styled.div`
	padding: 30px 0 30px;
	display: block;
	list-style: none;
	border-bottom: 1px solid ${COLORS.BORDER};
	margin-bottom: 14px;

	@media (max-width: 900px) {
		padding: 15px 0 15px;
	}
`;

const DIV_Date = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: ${COLORS.PRIMARY};

	@media (max-width: 1000px) {
		font-size: 16px;
	}

	@media (max-width: 500px) {
		font-size: 14px;
	}
`;

const P_Title = styled.p`
	font-size: 26px;
	font-weight: bold;
	flex: 1;

	@media (max-width: 1000px) {
		font-size: 18px;
	}

	@media (max-width: 500px) {
		font-size: 16px;
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
