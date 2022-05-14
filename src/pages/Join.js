import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../global/routes";

const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 900;
    background-color: white;
`;

const Logo = styled.div`
    width: 80px;
    height: 56px;
    cursor: pointer;
    border: 1px solid gray;
    position: fixed;
    top: 0px;
    left: 0px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    > :nth-child(n + 1) {
        margin-top: 10px;
    }
`;

const FlexWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    width: 300px;
    height: 35px;
`;

const Input2 = styled.input`
    width: 240px;
    height: 35px;
`;

const Button = styled.button`
    width: 300px;
    height: 35px;
`;

const Button2 = styled.button`
    width: 60px;
    height: 35px;
`;

const Join = () => {
    const navigate = useNavigate();

    const LogoToMain = () => {
        navigate(routes.main);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault(e);
        const { id, password } = e.target;

        let formData = new FormData();
        formData.append("id", id.value);
        formData.append("password", password.value);
    };

    return (
        <Wrapper>
            <Logo onClick={LogoToMain}>메인으로 가기</Logo>
            <Form onSubmit={onSubmitHandler}>
                <FlexWrapper>
                    <Input2
                        type="text"
                        name="id"
                        required={true}
                        placeholder="아이디"
                    />
                    <Button2 type="button">확인</Button2>
                </FlexWrapper>
                <Input
                    type="password"
                    name="password1"
                    required={true}
                    placeholder="비밀번호"
                />
                <Input
                    type="password"
                    name="password2"
                    required={true}
                    placeholder="비밀번호 확인"
                />
                <FlexWrapper>
                    <Input2
                        type="text"
                        name="nickname"
                        required={true}
                        placeholder="닉네임"
                    />
                    <Button2 type="button">확인</Button2>
                </FlexWrapper>
                <FlexWrapper>
                    <Input2
                        type="email"
                        name="email"
                        required={true}
                        placeholder="이메일"
                    />
                    <Button2 type="button">보내기</Button2>
                </FlexWrapper>
                <FlexWrapper>
                    <Input2
                        type="text"
                        name="code"
                        required={true}
                        placeholder="코드입력"
                    />
                    <Button2 type="button">확인</Button2>
                </FlexWrapper>
                <Button>회원가입</Button>
            </Form>
        </Wrapper>
    );
};

export default Join;
