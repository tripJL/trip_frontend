import styled from "styled-components";

const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid gray;
`;

const Contents = styled.div`
    max-width: 1180px;
    width: 100%;
    height: 100%;
`;

export const Footer = () => {
    return (
        <Wrapper>
            <Contents>Footer</Contents>
        </Wrapper>
    );
};
