import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const LinkButton = ({
    path,
    state,
    text,
    fs,
    fw,
    lh,
    color,
    width,
    height,
}) => {
    return (
        <Wrapper width={width} height={height}>
            <Link
                to={path}
                state={state}
                style={{
                    color: color,
                    fontSize: fs,
                    fontWeight: fw,
                    lineHeight: lh,
                }}
            >
                {text}
            </Link>
        </Wrapper>
    );
};

LinkButton.defaultProps = { state: {}, width: "340px", height: "40px" };

LinkButton.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    state: PropTypes.object,
    path: PropTypes.string,
    fs: PropTypes.string,
    lh: PropTypes.string,
    fw: PropTypes.number,
};
