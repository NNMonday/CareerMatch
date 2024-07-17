import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { apikeyTiny } from '../../utils/constanst';

function RichText({editorRef, valueBefore, onChange, id}) {

    return (
        <Editor
            apiKey={apikeyTiny}
            onEditorChange={(content) => onChange(content, id)}
            onInit={(_evt, editor) => editorRef.current = editor}
            initialValue= {valueBefore || "<p>This is the initial content of the editor.</p>" }
            init={{
                height: 200,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
    );
}

export default RichText;