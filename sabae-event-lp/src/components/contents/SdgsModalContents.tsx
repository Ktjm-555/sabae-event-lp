import styled from "@emotion/styled";

import { Button } from "../ui/Button";
type Item = {
	id: number;
	message: string;
	url: string;
};

type Props = {
	number: number;
	item: Item;
};
export const SdgsModalContents = ({ number, item }: Props) => {
	const goToSdgsPage = (url: string) => {
		window.open(url, "_blank");
	};
	return (
		<DIV_ModalContainer>
			<img
				src={`${
					import.meta.env.BASE_URL
				}images/sdgs_images/figure_image_number_${number}.png`}
			/>
			{item && (
				<DIV_ButtonP>
					{/* mt-bt ボタンとのマージン */}
					<p className="mt-bt">{item.message}</p>
					<Button
						onClick={() => goToSdgsPage(item.url)}
						isArrow={false}
						icon={`${import.meta.env.BASE_URL}icon/link.svg`}
					>
						詳しくはこちら
					</Button>
				</DIV_ButtonP>
			)}
		</DIV_ModalContainer>
	);
};

const DIV_ModalContainer = styled.div`
	display: flex;
	gap: 20px;
	/* SDGSのモーダルは若干paddingが大きいので調整 */
	padding: 10px;

	/* ボタンとの間のマージン */
	p.mt-bt {
		margin-bottom: 20px;
	}

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
`;

const DIV_ButtonP = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
