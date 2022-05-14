import styled from "styled-components";
import { Editor } from "../components/common/Editor";
import { useEffect, useState, useRef } from "react";
import { setBoard } from "../lib/board";

const Wrapper = styled.main`
    margin: 60px 0 150px 0;
    width: 100%;
    height: calc(100vh - 210px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    > form {
        width: auto;
        height: auto;
    }
`;

const WritePost = () => {
    const editorRef = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const editorz = editorRef.current.getEditor();
        console.log(editorz.root.innerHTML);
        setBoard({ contents: editorz.root.innerHTML });
    };

    return (
        <Wrapper>
            <form onSubmit={handleOnSubmit}>
                <Editor
                    placeholder={"내용을 입력해주세요"}
                    editorRef={editorRef}
                />
                <button>button</button>
            </form>
        </Wrapper>
    );
};

export default WritePost;
