import styled from "@emotion/styled";
import { ContentsTitle } from "./CotentsTitle";
import { S_DIV_CardContainer } from "../Style";
import { TEXT_M, TEXT_S } from "../consts/typography";
import { COLORS } from "../consts/color";

const newsList = [
	{
		date: "2025/07/25",
		title: "スペシャルステージの出演ゲスト第2弾が公開されました",
		link: true,
	},
];

export const NewsContents = () => {
	return (
		<div>
			<ContentsTitle title="お知らせ" balloonList={[]} />
			<div>
				<UL_CardWrapper>
					<LI_CardContainer>
						<A_CardLink>
							<DIV_Date className="date">2025/07/25</DIV_Date>
							<P_Title className="title">
								スペシャルステージの出演ゲスト第2弾が公開されました
							</P_Title>
						</A_CardLink>
					</LI_CardContainer>
				</UL_CardWrapper>
				<button></button>
			</div>
		</div>
	);
};

const LI_CardContainer = styled(S_DIV_CardContainer.withComponent("li"))`
	padding: 0px;
`;

const UL_CardWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

const DIV_Date = styled.div`
	${TEXT_S}
	font-weight: bold;
	color: ${COLORS.PRIMARY};
`;

// TODO: こことaタグはlinkがtrueの時だけ条件分岐する ここはclassname使う
const P_Title = styled.p`
	${TEXT_M}
	text-decoration:underline 1px;
	text-underline-offset: 3px;
`;

// TODO: 命名が微妙なので、この前後のタグ見直したい
const A_CardLink = styled.a`
	display: block;
	padding: 20px;

	&:hover ${DIV_Date}, &:hover ${P_Title} {
		opacity: 0.5;
	}
`;
