import Link from "next/link";
import styled from "styled-components";
import Seo from "../components/common/Seo";
import { routes } from "../shared/routes";
import Img from "../components/common/Img";
import LoginInput from "../components/common/input/LoginInput";
import LoginButton from "../components/common/button/LoginButton";
import SocialButton from "../components/common/button/SocialButton";
import Logo from "../components/common/Logo";

const Wrapper = styled.section`
    max-width: 1180px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    width: 440px;
    height: 533px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${(props) => props.theme.gray2};
    margin-bottom: 10px;
    > :nth-child(1) {
        margin: 90px 0 50px 0;
    }
    > :nth-child(2) {
        margin-bottom: 5px;
    }
`;

const LoginStatus = styled.div`
    max-width: 340px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
`;

const FindWrapper = styled.div`
    max-width: 340px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0;
`;

const Line = styled.div`
    max-width: 340px;
    width: 100%;
    height: auto;
    border-top: 1px solid ${(props) => props.theme.gray2};
    text-align: center;
    margin-bottom: 35px;
    padding-top: 10px;
`;

const SocialWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const socialArr = ["1", "2", "3", "4"];

export default function Login() {
    return (
        <Wrapper>
            <Seo title={"login"} />
            <Img src={"/x161.png"} width={"676px"} height={"680px"} />
            <FormWrapper>
                <Form>
                    <Logo />

                    <LoginInput name={"id"} placeholder={"아이디"} />
                    <LoginInput name={"pw"} placeholder={"비밀번호"} />

                    <LoginStatus>로그인 상태 유지</LoginStatus>

                    <LoginButton text={"로그인"} />

                    <FindWrapper>아아디 찾기|비밀번호 찾기</FindWrapper>

                    <Line>또는</Line>

                    <SocialWrapper>
                        {socialArr.map((val, idx) => {
                            return (
                                <SocialButton key={idx}>
                                    <div>{val}</div>
                                </SocialButton>
                            );
                        })}
                    </SocialWrapper>
                </Form>

                <LoginButton text={"join"} width={"440px"} height={"94px"} />
            </FormWrapper>
        </Wrapper>
    );
}
