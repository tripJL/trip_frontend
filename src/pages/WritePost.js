import styled from "styled-components";
import { Editor } from "../components/common/Editor";
import { useEffect, useMemo, useState, useRef } from "react";

const Wrapper = styled.main`
    margin: 60px 0 150px 0;
    width: 100%;
    height: calc(100vh - 210px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const WritePost = () => {
    return (
        <Wrapper>
            <Editor />
        </Wrapper>
    );
};

export default WritePost;
