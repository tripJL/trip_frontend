import styled from "styled-components";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/common/Editor"), {
    ssr: false,
});

const Wrapper = styled.section`
    max-width: 1180px;
    width: 100%;
    height: 100vh;
`;

export default function WritePost() {
    return (
        <Wrapper>
            <Editor />
        </Wrapper>
    );
}
