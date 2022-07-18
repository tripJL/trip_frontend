import { useEffect, useMemo, useState, useRef } from "react";
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";

Quill.register("modules/ImageResize", ImageResize);

// const ReactQuill = dynamic(
//     async () => {
//         const { default: RQ } = await import("react-quill");
//         return function comp({ editorRef, ...props }) {
//             return <RQ ref={editorRef} {...props} />;
//         };
//     },
//     {
//         ssr: false,
//         loading: () => <p>loading...</p>,
//     }
// );

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

const Wrapper = styled.div`
    width: 400px;
    height: auto;
    margin-bottom: 50px;
`;

export default function Editor({}) {
    const editorRef = useRef(null);

    /*editor에서 image를 base64로 처리하기 때문에 직접 image를 컨트롤해준다
        이미지 업로드 버튼 클릭
        해당 이미지 클릭
        서버에 해당 이미지 저장 후 url로 반환
        editor내의 커서위치에 이미지 삽입
    */
    const imageHandler = async () => {
        //이미지를 저장할 input DOM을 만들고 click event 발생
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        //input에 onChange event 발생
        input.addEventListener("change", async () => {
            try {
                const file = input.files[0];
                const formData = new FormData();
                formData.append("attachFile", file);
                //image를 server에 임시저장 후 url반환
                // const res = await editorImage(formData);
                // let url = res.data.body.data.uploadFullUrl;

                let url = URL.createObjectURL(file);

                //editor객체를 가져와 해당 커서위치에 image삽입 후 커서 위치 + 1
                const editor = editorRef.current.getEditor();
                const range = editor.getSelection();
                editor.clipboard.dangerouslyPasteHTML(
                    range.index,
                    `<img src=${url}  />`
                );
                editor.setSelection(range.index + 1);
            } catch (error) {
                return error;
            }
        });
    };

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
                handlers: {
                    image: imageHandler,
                },
            },
            ImageResize: {
                parchment: Quill.import("parchment"),
                modules: ["Resize", "DisplaySize", "Toolbar"],
            },
            // ImageDrop: true,
        };
    }, []);
    return (
        <Wrapper>
            <ReactQuill
                ref={editorRef}
                style={{ height: "400px" }}
                theme="snow"
                modules={modules}
                formats={formats}
            />
        </Wrapper>
    );
}
