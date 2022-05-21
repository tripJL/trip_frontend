import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
    max-width: ${(props) => props.width};
    width: 100%;
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
    background-color: ${(props) => props.theme.white};
`;

export const Button = ({ type, text, width, height }) => {
    return (
        <Wrapper type={type} width={width} height={height}>
            {text}
        </Wrapper>
    );
};

Button.defaultProps = {
    type: "button",
    width: "340px",
    height: "40px",
};

Button.prototype = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    width: PropTypes.string,
    height: PropTypes.string,
};
