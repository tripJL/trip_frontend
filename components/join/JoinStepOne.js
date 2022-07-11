import styled from "styled-components";
import LoginButton from "../common/button/LoginButton";
import Text from "../common/Text";

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TextBox = styled.article`
    max-width: 880px;
    width: 100%;
    height: 355px;
    border: 1px solid ${(props) => props.theme.gray2};
`;

const CheckBoxWrapper = styled.div`
    max-width: 880px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`;

const ButtonWrapper = styled.div`
    max-width: 880px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px 0 120px 0;
    > :nth-child(1) {
        margin-right: 10px;
    }
`;

export default function JoinStepOne({ handleNextStep, handlePreStep }) {
    return (
        <Wrapper>
            <Text
                text={"우리사이트 회원가입 약관 동의"}
                styles={`font-size: 25px; margin-bottom: 45px;`}
            />

            <CheckBoxWrapper>
                <Text text={"서비스 이용약관"} styles={`font-size: 17px;`} />
            </CheckBoxWrapper>
            <TextBox>
                제1조(목적)제1조(목적)내용
                ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
            </TextBox>

            <CheckBoxWrapper>
                <Text
                    text={"개인정보 수집 동의"}
                    styles={`font-size: 17px; `}
                />
            </CheckBoxWrapper>
            <TextBox>
                제1조(목적)제1조(목적)내용
                ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
            </TextBox>

            <ButtonWrapper>
                <LoginButton
                    text={"가입"}
                    width={"250px"}
                    height={"60px"}
                    onClick={handleNextStep}
                />
                <LoginButton
                    text={"취소"}
                    width={"250px"}
                    height={"60px"}
                    onClick={handlePreStep}
                />
            </ButtonWrapper>
        </Wrapper>
    );
}
