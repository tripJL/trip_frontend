import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../global/routes";
import { useSelector } from "react-redux";
import { getBoard } from "../lib/board";

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
    const store_login = useSelector((state) => state?.auth.login);
    console.log(store_login);
    getBoard({ pageIndex: 1, pageSize: 5 });
    return (
        <Wrapper>
            <Link to={{ pathname: `${routes.login}` }}>로그인</Link>
            <Link to={{ pathname: `${routes.join}` }}>회원가입</Link>
        </Wrapper>
    );
};

export default LogIn;
