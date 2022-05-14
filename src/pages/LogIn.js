import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api, routes } from "../global/routes";
import { useDispatch } from "react-redux";
import { setLogIn } from "../modules/action/auth";

const Wrapper = styled.main`
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

const Input = styled.input`
    width: 300px;
    height: 35px;
`;

const Button = styled.button`
    width: 300px;
    height: 35px;
`;

const LogIn = () => {
    const dispatch = useDispatch();
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
        dispatch(setLogIn({ id: id.value, pw: password.value }));
        LogoToMain();
    };

    return (
        <Wrapper>
            <Logo onClick={LogoToMain}>메인으로 가기</Logo>
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
