import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    width: ${(props) => props.radius}px;
    height: ${(props) => props.radius}px;
    border-radius: ${(props) => props.radius}px;
    border: 1px solid ${(props) => props.theme.gray2};
    cursor: pointer;
`;

export const Icon = ({ radius }) => {
    return <Wrapper radius={radius}></Wrapper>;
};

Icon.defaultProps = {
    radius: 50,
};

Icon.prototype = {
    radius: PropTypes.number,
};
