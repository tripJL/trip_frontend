import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { routes } from "../../global/routes";
import { useEffect } from "react";

const Wrapper = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 138px;
    background-color: ${(props) => props.theme.gray1};
`;

const Contents = styled.div`
    max-width: 1180px;
    width: 100%;
    height: 100%;
`;

export const Footer = () => {
    const location = useLocation();

    useEffect(() => {}, [location]);
    if (location.pathname !== routes.login) {
        return (
            <Wrapper>
                <Contents>Footer</Contents>
            </Wrapper>
        );
    } else {
        return <></>;
    }
};
