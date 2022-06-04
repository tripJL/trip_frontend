import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export const Image = ({ src, width, height }) => {
    return <Wrapper src={src} width={width} height={height} />;
};

Image.defaultProps = {
    width: "100%",
    height: "100%",
};

Image.prototype = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};
