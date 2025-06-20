import styled from "@emotion/styled";

export const Logo = () => {
	return (
		<>
			<A_Logo href="/">
				<IMG_LogoImg src="icon/logo.svg" alt="logo" />
			</A_Logo>
		</>
	);
};

const A_Logo = styled.a`
	display: block;
`;

const IMG_LogoImg = styled.img`
	height: 25px;
`;
