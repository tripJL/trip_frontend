import styled from "styled-components";
import { Text } from "../common/Text";
import { theme } from "../../global/theme";
//temporary image
import x1072 from "../../assets/img/x1072.png";
import x1074 from "../../assets/img/x1074.png";
import x1166 from "../../assets/img/x1166.png";
import x1168 from "../../assets/img/x1168.png";

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

const ImageEffect = styled.div`
    width: 295px;
    height: 370px;
    cursor: pointer;
    :hover {
        width: 330px;
        height: 435px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const imageList = [x1074, x1072, x1166, x1168];
const menuList = ["#1인 여행", "#커플 여행", "#가족 여행", "#배낭 여행"];

export const Recommend = () => {
    return (
        <Wrapper>
            <MenuWrapper>
                <Text
                    text={"여행지 추천"}
                    color={theme.gray2}
                    fs={"40px"}
                    margin={"0 0 30px 0"}
                />
                {menuList.map((val, idx) => {
                    return (
                        <Menu key={idx}>
                            <Text text={val} color={theme.gray2} fs={"18px"} />
                        </Menu>
                    );
                })}
            </MenuWrapper>
            <ImageWrapper>
                {imageList.map((val, idx) => {
                    return (
                        <ImageEffect key={idx}>
                            <Image src={val} />
                        </ImageEffect>
                    );
                })}
            </ImageWrapper>
        </Wrapper>
    );
};
