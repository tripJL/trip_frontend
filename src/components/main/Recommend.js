import styled from "styled-components";
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
    margin-bottom: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
`;

const Menu = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid gray;
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

export const Recommend = () => {
    return (
        <Wrapper>
            <MenuWrapper>
                <div>MenuWrapper</div>
                <div>MenuWrapper</div>
                <div>MenuWrapper</div>
                <div>MenuWrapper</div>
                <Menu>MenuWrapper</Menu>
                <Menu>MenuWrapper</Menu>
                <Menu>MenuWrapper</Menu>
                <Menu>MenuWrapper</Menu>
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
