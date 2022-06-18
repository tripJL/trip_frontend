import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.input`
    max-width: ${(props) => props.width};
    width: 100%;
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
    border-radius: 5px;
    margin: ${(props) => props.margin};
`;

export const Input2 = ({
    type,
    name,
    defaultValue,
    placeholder,
    required,
    width,
    height,
    margin,
}) => {
    return (
        <Wrapper
            type={type}
            name={name}
            width={width}
            height={height}
            margin={margin}
            defaultValue={defaultValue}
            required={required}
            placeholder={placeholder}
        />
    );
};

Input2.defaultProps = {
    width: "733px",
    height: "48px",
    required: false,
    type: "text",
    margin: "0",
};

Input2.prototype = {
    type: PropTypes.oneOf(["text", "password"]),
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.any,
    required: PropTypes.bool,
    margin: PropTypes.string,
};
