import styled from "styled-components";
import { head } from "../shared/routes";
import { useState } from "react";
import Link from "next/link";
import Seo from "../components/common/Seo";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuWrapper = styled.nav`
    max-width: 875px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.gray2};
    margin: 100px 0;
`;

const Menu = styled.div`
    max-width: 250px;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid
        ${(props) => (props.currStep ? props.theme.black : props.theme.white)};
`;

const menuList = [
    { step: 1, name: "약관 동의" },
    { step: 2, name: "회원정보 입력" },
    { step: 3, name: "회원가입 완료" },
];

export default function Join() {
    // const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // const handleNextStep = () => {
    //     if (step < 3) setStep((pre) => pre + 1);
    //     else navigate(routes.login);
    // };

    // const handlePreStep = () => {
    //     if (step > 1) setStep((pre) => pre - 1);
    //     else navigate(-1);
    // };

    return (
        <Wrapper>
            <Seo title={head.join} />

            <MenuWrapper>
                {menuList.map((val) => {
                    if (step === val.step) {
                        return (
                            <Menu key={val.step} currStep={true}>
                                {/* <Text
                                    text={val.step}
                                    color={theme.gray2}
                                    fs={"25px"}
                                    margin={"0 0 15px 0"}
                                />
                                <Text
                                    text={val.name}
                                    color={theme.gray2}
                                    fs={"16px"}
                                /> */}
                            </Menu>
                        );
                    } else {
                        return (
                            <Menu key={val.step}>
                                {/* <Text
                                    text={val.step}
                                    fc={theme.gray2}
                                    fs={"25px"}
                                    margin={"0 0 15px 0"}
                                />
                                <Text
                                    text={val.name}
                                    fc={theme.gray2}
                                    fs={"16px"}
                                /> */}
                            </Menu>
                        );
                    }
                })}
            </MenuWrapper>
            {/* {step === 1 && (
                    <JoinStepOne
                        handleNextStep={handleNextStep}
                        handlePreStep={handlePreStep}
                    />
                )}
                {step === 2 && (
                    <JoinStepTwo
                        handleNextStep={handleNextStep}
                        handlePreStep={handlePreStep}
                    />
                )}
                {step === 3 && <JoinStepThree handleNextStep={handleNextStep} />} */}
        </Wrapper>
    );
}
