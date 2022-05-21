import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LinkText = ({ path, text, state, fs, fw, lh, color, deco }) => {
    return (
        <Link
            to={path}
            state={state}
            style={{
                textDecoration: deco,
                color: color,
                fontSize: fs,
                fontWeight: fw,
                lineHeight: lh,
            }}
        >
            {text}
        </Link>
    );
};

LinkText.defaultProps = {
    color: "inherit",
    deco: "none",
    state: {},
    fs: "14px",
    fw: 400,
    path: "/",
};

LinkText.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    deco: PropTypes.oneOf(["none", "line-through", "overline", "underline"]),
    state: PropTypes.object,
    path: PropTypes.string,
    fs: PropTypes.string,
    lh: PropTypes.string,
    fw: PropTypes.number,
};
