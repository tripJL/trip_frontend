import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../global/routes";
import { Logo } from "../components/common/Logo";
import { Input } from "../components/common/Input/Input";
import { Button } from "../components/common/Button/Button";
import { Label } from "../components/common/Label";

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 900;
    top: 0;
    bottom: 0;
    background-color: white;
`;

const Form = styled.form`
    max-width: 800px;
    width: 100%;
    padding: 75px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.gray2};
    > :nth-child(n + 1) {
        margin-bottom: 15px;
    }
`;

const RowWrapper = styled.div`
    width: 575px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ColumnWrapper = styled.div`
    width: 575px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    > :nth-child(1) {
        margin-bottom: 5px;
    }
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
            <Form onSubmit={onSubmitHandler}>
                <Logo />
                <ColumnWrapper>
                    <Label htmlFor={"id"} text={"아이디"} />
                    <Input
                        type={"text"}
                        name={"id"}
                        required={true}
                        placeholder={"아이디"}
                        width={"575px"}
                        height={"60px"}
                    />
                </ColumnWrapper>
                <ColumnWrapper>
                    <Label htmlFor={"password1"} text={"비밀번호"} />
                    <Input
                        type={"password"}
                        name={"password1"}
                        required={true}
                        placeholder={"비밀번호"}
                        width={"575px"}
                        height={"60px"}
                    />
                </ColumnWrapper>
                <ColumnWrapper>
                    <Label htmlFor={"password2"} text={"비밀번호 확인"} />
                    <Input
                        type={"password"}
                        name={"password2"}
                        required={true}
                        placeholder={"비밀번호 확인"}
                        width={"575px"}
                        height={"60px"}
                    />
                </ColumnWrapper>
                <ColumnWrapper>
                    <Label htmlFor={"nickname"} text={"닉네임"} />
                    <Input
                        type={"text"}
                        name={"nickname"}
                        required={true}
                        placeholder={"닉네임"}
                        width={"575px"}
                        height={"60px"}
                    />
                </ColumnWrapper>
                <ColumnWrapper>
                    <Label htmlFor={"email"} text={"이메일"} />
                    <Input
                        type={"email"}
                        name={"email"}
                        required={true}
                        placeholder={"이메일"}
                        width={"575px"}
                        height={"60px"}
                    />
                </ColumnWrapper>
                <ColumnWrapper>
                    <Label htmlFor={"email"} text={"이메일"} />
                    <Input
                        type={"email"}
                        name={"email"}
                        required={true}
                        placeholder={"이메일"}
                        width={"575px"}
                        height={"100px"}
                    />
                </ColumnWrapper>
                <RowWrapper>
                    <Button
                        type={"submit"}
                        text={"회원가입"}
                        width={"270px"}
                        height={"70px"}
                    />
                    <Button
                        type={"button"}
                        text={"취소"}
                        width={"270px"}
                        height={"70px"}
                        onClick={LogoToMain}
                    />
                </RowWrapper>
            </Form>
        </Wrapper>
    );
};

export default Join;
