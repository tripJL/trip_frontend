import { useEffect, useMemo, useState, useRef } from "react";
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/ImageResize", ImageResize);

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
                //     image: imageHandler,
                // },
            },
            ImageResize: {
                parchment: Quill.import("parchment"),
                modules: ["Resize", "DisplaySize", "Toolbar"],
            },
        };
    }, []);

    const onChange = () => {
        console.log();
    };

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
                onChange={(content, delta, source, editor) => {
                    console.log(editor.getHTML());
                }}
            />
        </Wrapper>
    );
};
