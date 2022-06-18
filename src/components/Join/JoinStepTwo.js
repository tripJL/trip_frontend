import styled from "styled-components";
import { useEffect, useState } from "react";
import { theme } from "../../global/theme";
import { Text } from "../common/Text";
import { Button } from "../common/Button/Button";
import { Input2 } from "../common/Input/Input2";

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > :nth-child(n + 2):nth-child(-n + 6) {
        margin-bottom: 30px;
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 880px;
    width: 100%;
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

export const JoinStepTwo = ({ handleNextStep, handlePreStep }) => {
    useEffect(() => {}, []);
    return (
        <Wrapper>
            <Text
                text={"필수 입력 사항"}
                color={theme.gray2}
                fs={"25px"}
                margin={"0 0 45px 0"}
            />

            <FlexWrapper>
                <Text text={"아이디"} color={theme.gray2} fs={"18px"} />
                <Input2 />
            </FlexWrapper>

            <FlexWrapper>
                <Text text={"비밀번호"} color={theme.gray2} fs={"18px"} />
                <Input2 />
            </FlexWrapper>

            <FlexWrapper>
                <div></div>
                <Input2 />
            </FlexWrapper>

            <FlexWrapper>
                <Text text={"닉네임"} color={theme.gray2} fs={"18px"} />
                <Input2 />
            </FlexWrapper>

            <FlexWrapper>
                <Text text={"이메일 인증"} color={theme.gray2} fs={"18px"} />
                <Input2 />
            </FlexWrapper>

            <FlexWrapper>
                <Text text={"닉네임"} color={theme.gray2} fs={"18px"} />
                <Input2 />
            </FlexWrapper>

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
