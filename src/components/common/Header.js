import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { routes } from "../../global/routes";
import { useEffect } from "react";

const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.white};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 2px solid ${(props) => props.theme.gray2};
    z-index: 9;
`;

const Contents = styled.div`
    max-width: 1180px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > a {
        width: 80px;
        height: 40px;
        margin: 0 10px;
        background-color: rgb(239, 239, 239);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Logo = styled.div`
    width: 100px;
    height: 30px;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.gray2};
    text-align: center;
    line-height: 25px;
`;

const Search = styled.div`
    width: 200px;
    height: 30px;
    margin-right: 105px;
    border: 2px solid ${(props) => props.theme.gray2};
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    line-height: 25px;
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    > a {
        width: 55px;
        height: 20px;
        border: 2px solid ${(props) => props.theme.gray2};
        font-size: 12px;
        text-align: center;
        line-height: 15px;
    }
    > :nth-child(2) {
        margin-right: 15px;
    }
`;

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const LogoToMain = () => {
        navigate(routes.main);
    };

    useEffect(() => {}, [location]);

    if (
        location.pathname !== routes.join &&
        location.pathname !== routes.login
    ) {
        return (
            <Wrapper>
                <Contents>
                    <Logo onClick={LogoToMain}>Logo</Logo>
                    <FlexWrapper>
                        <Search>Search</Search>
                        <Link to={{ pathname: `${routes.login}` }}>로그인</Link>
                        <Link to={{ pathname: `${routes.join}` }}>
                            회원가입
                        </Link>
                    </FlexWrapper>
                </Contents>
            </Wrapper>
        );
    } else {
        return <></>;
    }
};
