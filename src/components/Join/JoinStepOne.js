import styled from "styled-components";
import { useEffect, useState } from "react";
import { Text } from "../common/Text";
import { theme } from "../../global/theme";
import { Button } from "../common/button/Button";

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
`;

export const JoinStepOne = ({ handleNextStep, handlePreStep }) => {
    useEffect(() => {}, []);
    return (
        <Wrapper>
            <Text
                text={"우리사이트 회원가입 약관 동의"}
                color={theme.gray2}
                fs={"25px"}
                margin={"0 0 45px 0"}
            />

            <CheckBoxWrapper>
                <Text
                    text={"서비스 이용약관"}
                    color={theme.gray2}
                    fs={"17px"}
                />
            </CheckBoxWrapper>
            <TextBox>
                제1조(목적)제1조(목적)내용
                ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
            </TextBox>

            <CheckBoxWrapper>
                <Text
                    text={"개인정보 수집 동의"}
                    color={theme.gray2}
                    fs={"17px"}
                />
            </CheckBoxWrapper>
            <TextBox>
                제1조(목적)제1조(목적)내용
                ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
            </TextBox>

            <ButtonWrapper>
                <Button
                    type={"button"}
                    text={"가입"}
                    width={"250px"}
                    height={"60px"}
                    backColor={theme.black}
                    fontColor={theme.white}
                    fs={"18px"}
                    margin={"0 5px 0 0"}
                    onClick={handleNextStep}
                />
                <Button
                    type={"button"}
                    text={"취소"}
                    width={"250px"}
                    height={"60px"}
                    fs={"18px"}
                    onClick={handlePreStep}
                />
            </ButtonWrapper>
        </Wrapper>
    );
};
