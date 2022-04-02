import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../global/routes";

const Wrapper = styled.main`
    margin: 60px 0 150px 0;
    width: 100%;
    height: calc(100vh - 210px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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

const LogIn = () => {
    return (
        <Wrapper>
            <Link to={{ pathname: `${routes.login}` }}>로그인</Link>
            <Link to={{ pathname: `${routes.join}` }}>회원가입</Link>
        </Wrapper>
    );
};

export default LogIn;
