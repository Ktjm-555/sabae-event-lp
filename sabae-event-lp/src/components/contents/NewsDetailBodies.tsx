import styled from "@emotion/styled";

type Props = {
	news: {
		id: number;
		title: string;
		date: string;
		type: string;
		url?: string;
		detail?: string;
		images?: { name: string; imgSrc: string; alt: string }[];
	};
};

export const NewsDetailTypeA = ({ news }: Props) => {
	return (
		<div>
			<P_Detail
				dangerouslySetInnerHTML={{ __html: news.detail ? news.detail : "" }}
			></P_Detail>
			<DIV_GuestContainer>
				{news.images &&
					news.images.map((guest, index) => (
						<div key={index}>
							<DIV_Image>
								<IMG_Image src={guest.imgSrc} alt={guest.alt} />
							</DIV_Image>
							<P_ImageName
								dangerouslySetInnerHTML={{ __html: guest.name }}
							></P_ImageName>
						</div>
					))}
			</DIV_GuestContainer>
		</div>
	);
};

const P_Detail = styled.p`
	font-size: 30px;
	line-height: 1.5;
	font-weight: bold;
	text-align: center;
	margin-bottom: 45px;

	.pc_only,
	.sp_only {
		font-weight: 500;
	}

	.pc_only {
		display: inline;
	}

	.sp_only {
		display: none;
	}

	@media (max-width: 1100px) {
		font-size: 28px;
	}

	@media (max-width: 1000px) {
		font-size: 20px;
		margin-bottom: 30px;
	}

	@media (max-width: 700px) {
		margin-bottom: 22px;

		.pc_only {
			display: none;
		}
		.sp_only {
			display: inline;
		}
	}

	@media (max-width: 500px) {
		font-size: 16px;

		.sp_only {
			font-size: 13px;
		}
	}
`;

const DIV_GuestContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
	}
`;

const DIV_Image = styled.div`
	width: 100%;
	overflow: hidden;
`;

const IMG_Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const P_ImageName = styled.p`
	@media (max-width: 500px) {
		font-size: 11px;
	}
`;
