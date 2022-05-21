import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.label`
    ${(props) => props.styles}
`;

export const Label = ({ styles, htmlFor, text }) => {
    return (
        <Wrapper htmlFor={htmlFor} styles={styles}>
            {text}
        </Wrapper>
    );
};

Label.defaultProps = {
    styles: {},
};

Label.prototype = {
    styles: PropTypes.object,
    htmlFor: PropTypes.string,
    text: PropTypes.string,
};
