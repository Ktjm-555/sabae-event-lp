import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Logo = () => {
	return (
		<>
			<A_Logo to="/#1">
				<img src="logo/sabae_logo.svg" alt="logo" />
			</A_Logo>
		</>
	);
};

const A_Logo = styled(Link)`
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
