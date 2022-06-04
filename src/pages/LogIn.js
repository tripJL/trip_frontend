import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../global/routes";
import { useDispatch } from "react-redux";
import { setLogIn } from "../modules/action/auth";
import { Input } from "../components/common/Input/Input";
import { Button } from "../components/common/Button/Button";
import { Image } from "../components/common/Image";
import { Logo } from "../components/common/Logo";
import { Icon } from "../components/common/Icon";
import { Text } from "../components/common/Text";
import loginImg from "../assets/img/x161.png";

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

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RowWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

const FlexWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0 5px 0;
    > :nth-child(1) {
        margin-bottom: 5px;
    }
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
        margin-top: 90px;
    }
`;

const Line = styled.div`
    width: 340px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    > div {
        width: 151px;
        height: 1px;
        background-color: ${(props) => props.theme.gray2};
    }
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
            <Image src={loginImg} width={" 676px"} height={"680px"} />
            <ColumnWrapper>
                <Form onSubmit={onSubmitHandler}>
                    <Logo />
                    <FlexWrapper>
                        <Input
                            type={"text"}
                            name={"id"}
                            required={true}
                            placeholder={"아이디"}
                        />
                        <Input
                            type={"password"}
                            name={"password"}
                            required={true}
                            placeholder={"비밀번호"}
                        />
                    </FlexWrapper>
                    <Text text={"로그인 상태 유지"} margin={"5px 0"} />
                    <Button type={"submit"} text={"로그인"} />
                    <Text
                        text={"아아디 찾기|비밀번호 찾기"}
                        margin={"10px 0"}
                    />
                    <Line>
                        <div></div>
                        <Text as={"span"} text={"또는"} />
                        <div></div>
                    </Line>
                    <RowWrapper>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                    </RowWrapper>
                </Form>
                <Button
                    type={"button"}
                    text={"join"}
                    width={"440px"}
                    height={"94px"}
                />
            </ColumnWrapper>
        </Wrapper>
    );
};

export default LogIn;
