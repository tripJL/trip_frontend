import { useEffect, useMemo, useState, useRef } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Wrapper = styled.div`
    height: auto;
`;

export const Editor = ({ placeholder, value }) => {
    const editorRef = useRef();

    const formats = [
        //'font',
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "align",
        "color",
        "background",
    ];

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    //[{ 'font': [] }],
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                    ],
                    ["link", "image"],
                    [{ align: [] }, { color: [] }, { background: [] }],
                    ["clean"],
                ],
                // handlers: {
                //     // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
                //     image: imageHandler,
                // },
            },
        };
    }, []);

    useEffect(() => {}, []);

    return (
        <Wrapper className="text-editor">
            <ReactQuill
                ref={editorRef}
                style={{ height: "400px" }}
                theme="snow"
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                value={value}
            />
        </Wrapper>
    );
};
