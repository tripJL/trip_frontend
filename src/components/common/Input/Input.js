import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.input`
    max-width: ${(props) => props.width};
    width: 100%;
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
`;

export const Input = ({
    type,
    name,
    defaultValue,
    placeholder,
    required,
    width,
    height,
}) => {
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
};

Input.defaultProps = {
    width: "340px",
    height: "50px",
    required: false,
    type: "text",
};

Input.prototype = {
    type: PropTypes.oneOf(["text", "password"]),
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.any,
    required: PropTypes.bool,
};
