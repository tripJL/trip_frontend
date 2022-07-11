import styled from "styled-components";

const Wrapper = styled.input`
    width: 100%;
    max-width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
`;

export default function LoginInput({
    width,
    height,
    placeholder,
    required,
    name,
}) {
    return (
        <Wrapper
            width={width}
            height={height}
            required={required}
            placeholder={placeholder}
            name={name}
        />
    );
}

LoginInput.defaultProps = {
    width: "340px",
    height: "50px",
    required: false,
    type: "text",
};
