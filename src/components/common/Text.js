import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../global/theme";

const Wrapper = styled.div`
    font-size: ${(props) => props.fs};
    font-weight: ${(props) => props.fw};
    line-height: ${(props) => props.lh};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
`;

export const Text = ({ as, text, fs, fw, lh, color, margin }) => {
    return (
        <Wrapper as={as} fs={fs} fw={fw} lh={lh} color={color} margin={margin}>
            {text}
        </Wrapper>
    );
};

Text.defaultProps = { as: "div", fw: 400, margin: "0" };

Text.prototype = {
    as: PropTypes.string,
    text: PropTypes.string,
    fs: PropTypes.string,
    fw: PropTypes.number,
    lh: PropTypes.string,
    color: PropTypes.string,
    margin: PropTypes.string,
};
