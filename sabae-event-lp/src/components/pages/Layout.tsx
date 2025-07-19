import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";

export const Layout = () => {
	return (
		<StyledWrapper>
			<Header />
			<StyledMain>
				<Outlet />
			</StyledMain>
			<Footer />
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const StyledMain = styled.main`
	flex: 1;
`;
