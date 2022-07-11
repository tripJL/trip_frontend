import styled from "styled-components";

const Wrapper = styled.div`
    ${(props) => props.styles}
`;

export default function Text({ text, tag, styles }) {
    return (
        <Wrapper as={tag} styles={styles}>
            {text}
        </Wrapper>
    );
}

Text.defaultProps = {
    tag: "div",
    styles: ``,
};
