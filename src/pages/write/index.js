import React, { createRef, useEffect } from 'react'

// import modules
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

import './write.css'

export default function AddPost() {
    const editorRef = createRef()

    useEffect(() => {
        /**
         * 1. 서버로 부터 카테고리 목록 받아온 후 selectBox에 전달.
         * 
         */
    }, [])

    const handleSave = () => {
        console.log(editorRef.current.getInstance().getHtml())
        const htmlInstance = editorRef.current.getInstance().getHtml()

        // title, category, htmlInstnace 서버로 보내기.
    }

    return (
        //TODO 대표 썸네일 지정하기.
        <div className="write-container">
            <div className="write-title-box">
                <div>게시글 작성하기<span onClick={() => handleSave()}>작성하기</span></div>
                <select name="type" onChange={""}>
                    <option value="" disabled selected>카테고리를 선택해 주세요.</option>
                    <option value="1">목록1</option>
                    <option value="2">목록2</option>
                    <option value="3">목록3</option>
                    <option value="4">목록4</option>
                </select>
                <input type="text" placeholder="제목을 입력해주세요" />
            </div>
            <Editor
                initialValue="DEV HYUN에 새로운 지식을 공유해주세요!!"
                previewStyle="vertical"
                height="650px"
                initialEditType="markdown"
                useCommandShortcut={true}
                usageStatistics={false}
                ref={editorRef}
            />
        </div>
    )
}
