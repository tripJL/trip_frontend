import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../../global/theme";

const Wrapper = styled.button`
    max-width: ${(props) => props.width};
    width: 100%;
    height: ${(props) => props.height};
    border: 1px solid ${(props) => props.theme.gray2};
    background-color: ${(props) => props.backColor};
    color: ${(props) => props.fontColor};
    font-size: ${(props) => props.fs};
    margin: ${(props) => props.margin};
`;

export const Button = ({
    type,
    text,
    width,
    height,
    backColor,
    fontColor,
    onClick,
    fs,
    margin,
}) => {
    return (
        <Wrapper
            type={type}
            width={width}
            height={height}
            backColor={backColor}
            onClick={onClick}
            fontColor={fontColor}
            fs={fs}
            margin={margin}
        >
            {text}
        </Wrapper>
    );
};

Button.defaultProps = {
    type: "button",
    width: "340px",
    height: "40px",
    backColor: theme.white,
    fontColor: theme.black,
    onClick: () => {},
};

Button.prototype = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    width: PropTypes.string,
    height: PropTypes.string,
    onClick: PropTypes.func,
    backColor: PropTypes.string,
    fontColor: PropTypes.string,
    fs: PropTypes.string,
    margin: PropTypes.string,
};
