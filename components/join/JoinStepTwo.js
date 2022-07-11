import styled from "styled-components";
import JoinInput from "../common/input/JoinInput";
import LoginButton from "../common/button/LoginButton";
import EmailInput from "../common/input/EmailInput";
import Text from "../common/Text";

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
    > :nth-child(1) {
        margin-right: 10px;
    }
`;

const inputDataArr = [
    { label: "아이디", name: "id", placeholder: "아이디" },
    { label: "비밀번호", name: "pw", placeholder: "비밀번호" },
    { label: "", name: "pw2", placeholder: "비밀번호" },
    { label: "닉네임", name: "nickName", placeholder: "닉네임" },
    { label: "이메일 인증", name: "email", placeholder: "이메일 인증" },
    { label: "인증번호", name: "codeNumber", placeholder: "인증번호" },
];

export default function JoinStepTwo({ handleNextStep, handlePreStep }) {
    return (
        <Wrapper>
            <Text
                text={"필수 입력 사항"}
                styles={`font-size: 25px; margin-bottom: 45px;`}
            />

            {inputDataArr.map((val, idx) => {
                if (idx === 4) {
                    return (
                        <FlexWrapper id={idx}>
                            <div>{val.label}</div>
                            <EmailInput
                                name={val.name}
                                placeholder={val.placeholder}
                            />
                        </FlexWrapper>
                    );
                } else {
                    return (
                        <FlexWrapper id={idx}>
                            <div>{val.label}</div>
                            <JoinInput
                                name={val.name}
                                placeholder={val.placeholder}
                            />
                        </FlexWrapper>
                    );
                }
            })}

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
