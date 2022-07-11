import styled from "styled-components";

const Wrapper = styled.input`
    max-width: ${(props) => props.width};
    width: 100%;
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
    border-radius: 5px;
`;

export default function JoinInput({
    type,
    name,
    defaultValue,
    placeholder,
    required,
    width,
    height,
}) {
    return (
        <Wrapper
            type={type}
            name={name}
            width={width}
            height={height}
            defaultValue={defaultValue}
            required={required}
            placeholder={placeholder}
        />
    );
}

JoinInput.defaultProps = {
    width: "733px",
    height: "48px",
    required: false,
    type: "text",
};
