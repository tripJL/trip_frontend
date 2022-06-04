import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { routes } from "../../global/routes";

const Wrapper = styled.h1`
    cursor: pointer;
`;

export const Logo = () => {
    const navigate = useNavigate();

    const LogoToMain = () => {
        navigate(routes.main);
    };

    return <Wrapper onClick={LogoToMain}>LOGO</Wrapper>;
};
