import styled from "@emotion/styled";

export const Logo = () => {
	return (
		<>
			<A_Logo href="#1">
				<img src="logo/sabae_logo.svg" alt="logo" />
			</A_Logo>
		</>
	);
};

const A_Logo = styled.a`
	display: block;
	@media (max-width: 410px) {
		img {
			width: 190px;
		}
	}

	@media (max-width: 360px) {
		img {
			width: 170px;
		}
	}
`;
