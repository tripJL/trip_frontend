import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.main`
    max-width: 1180px;
    width: 100%;
    height: auto;
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    margin: 60px auto 0 auto;
`;

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Wrapper>{children}</Wrapper>
            <Footer />
        </>
    );
}
