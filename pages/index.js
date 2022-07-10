import styled from "styled-components";
import Seo from "../components/common/Seo";
import Banner from "../components/main/Banner";
import Recommend from "../components/main/Recommend";
import Story from "../components/main/Story";
import News from "../components/main/News";
import Image from "next/image";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
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

const ImageComtainer = styled.div`
    position: relative;
    width: 575px;
    height: 435px;
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

export default function Home() {
    return (
        <Wrapper>
            <Seo />

            <Banner />

            <Recommend />

            <TemporaryList>
                <ImageComtainer>
                    <Image src={"/x1177.png"} layout="fill" />
                </ImageComtainer>
                <ImageComtainer>
                    <Image src={"/x1175.png"} layout="fill" />
                </ImageComtainer>
            </TemporaryList>

            <NoticeList>
                <News />
                <Story />
            </NoticeList>
        </Wrapper>
    );
}
