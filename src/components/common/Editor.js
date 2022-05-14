import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import { editorImage } from "../../lib/editor";

Quill.register("modules/ImageResize", ImageResize);

const Wrapper = styled.div`
    height: auto;
    margin-bottom: 50px;
`;

export const Editor = ({ placeholder, editorRef, postId }) => {
    const [value, setValue] = useState("");

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
            const file = input.files[0];
            const formData = new FormData();
            formData.append("attachFile", file);
            try {
                //image를 server에 임시저장 후 url반환
                const res = await editorImage(formData);
                let url = res.data.body.data.uploadFullUrl;
                //editor객체를 가져와 해당 커서위치에 image삽입 후 커서 위치 + 1
                const editor = editorRef.current.getEditor();
                const range = editor.getSelection();
                editor.clipboard.dangerouslyPasteHTML(
                    range.index,
                    `<img src=${url} alt="image" />`
                );
                editor.setSelection(range.index + 1);
            } catch (error) {
                return error;
            }
        });
    };

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

    useEffect(() => {
        if (postId) {
            setValue("기존 게시글 불러오기");
        }
    }, [value]);

    return (
        <Wrapper>
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
