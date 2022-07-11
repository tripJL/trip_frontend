import styled from "styled-components";

const Wrapper = styled.button`
    width: 100%;
    max-width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
    background-color: ${(props) => props.theme.white};
`;

export default function LoginButton({ type, width, height, text, onClick }) {
    return (
        <Wrapper type={type} width={width} height={height} onClick={onClick}>
            {text}
        </Wrapper>
    );
}

LoginButton.defaultProps = {
    type: "button",
    width: "340px",
    height: "40px",
    onClick: () => {},
};
