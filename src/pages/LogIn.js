import styled from "styled-components";
import { backend } from "../config/axios";
import { api } from "../global/routes";

const Wrapper = styled.main`
    margin: 60px 0 150px 0;
    width: 100%;
    height: calc(100vh - 210px);
    display: flex;
    align-items: center;
    justify-content: center;
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

const Input = styled.input`
    width: 300px;
    height: 35px;
`;

const Button = styled.button`
    width: 300px;
    height: 35px;
`;

const LogIn = () => {
    const onSubmitHandler = async (e) => {
        e.preventDefault(e);
        const { id, password } = e.target;

        let formData = new FormData();
        formData.append("id", id.value);
        formData.append("password", password.value);

        // const res = await backend.post(api.login, formData);
    };

    return (
        <Wrapper>
            <Form onSubmit={onSubmitHandler}>
                <Input
                    type="text"
                    name="id"
                    required={true}
                    placeholder="아이디"
                />
                <Input
                    type="password"
                    name="password"
                    required={true}
                    placeholder="비밀번호"
                />
                <Button>로그인</Button>
            </Form>
        </Wrapper>
    );
};

export default LogIn;
