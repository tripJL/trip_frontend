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
    margin-bottom: 120px;
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

export default function JoinStepThree({ handleNextStep }) {
    return (
        <Wrapper>
            <Logo />

            <Text
                text={"회원가입 완료"}
                styles={`font-size: 25px; margin: 20px 0 45px 0;`}
            />

            <LogoIcon />

            <Text
                text={"ㅇㅇㅇㅇ사이트 회원 가입이 완료되었습니다."}
                styles={`font-size: 16px; margin: 30px 0 10px 0;`}
            />
            <Text
                text={"ㅇㅇㅇㅇ사이트의 다양한 컨텐츠를 즐겨보세요"}
                styles={`font-size: 16px; margin: 0 0 60px 0;`}
            />

            <LoginButton
                text={"로그인하기"}
                width={"250px"}
                height={"60px"}
                onClick={handleNextStep}
            />
        </Wrapper>
    );
}
