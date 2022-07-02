import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../global/routes";
import { useSelector } from "react-redux";
import { Banner } from "../components/main/Banner";
import { Recommend } from "../components/main/Recommend";
import { Story } from "../components/main/Story";
import { News } from "../components/main/News";
//temporary image
import x1177 from "../assets/img/x1177.png";
import x1175 from "../assets/img/x1175.png";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TemporaryList = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
`;

const NoticeList = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin: 50px 0 20px 0;
`;

const TemporaryImg = styled.img`
    max-width: 575px;
    max-height: 435px;
`;

const Main = () => {
    const store_login = useSelector((state) => state?.auth.login);
    console.log(store_login);

    return (
        <Wrapper>
            <Banner />

            <Recommend />

            <TemporaryList>
                <TemporaryImg src={x1177} />
                <TemporaryImg src={x1175} />
            </TemporaryList>

            <NoticeList>
                <News />
                <Story />
            </NoticeList>
        </Wrapper>
    );
};

export default LogIn;
