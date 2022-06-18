import styled from "styled-components";
import { useEffect, useState } from "react";
import { theme } from "../../global/theme";
import { Text } from "../common/Text";
import { Button } from "../common/Button/Button";

const Wrapper = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    width: 178px;
    height: 50px;
    border: 1px solid ${(props) => props.theme.gray2};
`;

const LogoIcon = styled.div`
    width: 134px;
    height: 134px;
    border-radius: 67px;
    border: 1px solid ${(props) => props.theme.gray2};
`;

export const JoinStepThree = ({ handleNextStep }) => {
    useEffect(() => {}, []);
    return (
        <Wrapper>
            <Logo />
            <Text
                text={"회원가입 완료"}
                color={theme.gray2}
                fs={"25px"}
                margin={"20px 0 45px 0"}
            />
            <LogoIcon />
            <Text
                text={"ㅇㅇㅇㅇ사이트 회원 가입이 완료되었습니다."}
                color={theme.gray2}
                fs={"25px"}
                margin={"30px 0 10px 0"}
            />
            <Text
                text={"ㅇㅇㅇㅇ사이트의 다양한 컨텐츠를 즐겨보세요."}
                color={theme.gray2}
                fs={"16px"}
                margin={"0 0 60px 0"}
            />
            <Button
                type={"button"}
                text={"로그인하기"}
                width={"480px"}
                height={"65px"}
                backColor={theme.black}
                fontColor={theme.white}
                fs={"18px"}
                margin={"0 5px 0 0"}
                onClick={handleNextStep}
            />
        </Wrapper>
    );
};
