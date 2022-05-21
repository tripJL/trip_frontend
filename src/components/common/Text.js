import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../global/theme";

const Wrapper = styled.div`
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    line-height: ${(props) => props.lh};
    color: ${(props) => props.color};
`;

export const Text = ({ as, text, fs, fw, lh, color }) => {
    return <Wrapper as={as}>{text}</Wrapper>;
};

Text.defaultProps = { as: "div", fw: 400 };

Text.prototype = {
    as: PropTypes.string,
    text: PropTypes.string,
    fs: PropTypes.string,
    fw: PropTypes.number,
    lh: PropTypes.string,
    color: PropTypes.string,
};
