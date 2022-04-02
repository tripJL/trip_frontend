import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { routes } from "../../global/routes";

const Wrapper = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 1px solid gray;
`;

const Logo = styled.div`
    width: 80px;
    height: 100%;
    cursor: pointer;
    border: 1px solid gray;
`;

export const Header = () => {
    const navigate = useNavigate();

    const LogoToMain = () => {
        navigate(routes.main);
    };

    return (
        <Wrapper>
            <Logo onClick={LogoToMain}>메인으로 가기</Logo>
        </Wrapper>
    );
};
