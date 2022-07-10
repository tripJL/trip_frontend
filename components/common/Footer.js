import styled from "styled-components";

const Wrapper = styled.footer`
    width: 100%;
    height: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.gray1};
`;

const Contents = styled.div`
    max-width: 1180px;
    width: 100%;
    height: 100%;
`;

export default function Footer() {
    return (
        <Wrapper>
            <Contents>Footer</Contents>
        </Wrapper>
    );
}
