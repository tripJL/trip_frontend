import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid ${(props) => props.theme.gray2};
    cursor: pointer;
`;

const SocialButton = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default SocialButton;
