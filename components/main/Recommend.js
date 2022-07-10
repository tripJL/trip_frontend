import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuWrapper = styled.article`
    width: 690px;
    height: auto;
    margin-top: 50px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    > :nth-child(1) {
        justify-self: center;
        grid-row: 1 / 2;
        grid-column: 1 / 5;
    }
`;

const Menu = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme.gray2};
    cursor: pointer;
`;

const ImageWrapper = styled.article`
    width: 100%;
    height: auto;
    min-height: 435px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 295px;
    height: 370px;
    position: relative;
    cursor: pointer;
    :hover {
        width: 330px;
        height: 435px;
    }
`;

const imageList = ["/x1074.png", "/x1072.png", "/x1166.png", "/x1168.png"];
const menuList = ["#1인 여행", "#커플 여행", "#가족 여행", "#배낭 여행"];

export default function Recommend() {
    return (
        <Wrapper>
            <MenuWrapper>
                <div>{"여행지 추천"}</div>

                {menuList.map((val, idx) => {
                    return <Menu key={idx}>{val}</Menu>;
                })}
            </MenuWrapper>
            <ImageWrapper>
                {imageList.map((val, idx) => {
                    return (
                        <ImageContainer key={idx}>
                            <Image src={val} layout="fill" />
                        </ImageContainer>
                    );
                })}
            </ImageWrapper>
        </Wrapper>
    );
}
