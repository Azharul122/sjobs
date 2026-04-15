import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

interface TinyEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const TinyEditor: React.FC<TinyEditorProps> = ({ value, onChange, disabled = false }) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setMode(disabled ? 'readonly' : 'design');
    }
  }, [disabled]);

  return (
    <div className="rounded-editor" style={{ minHeight: '153px' }}>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY as string}
        onInit={(_evt: unknown, editor: TinyMCEEditor) => {
          editorRef.current = editor;
          editor.setMode(disabled ? 'readonly' : 'design');
        }}
        initialValue={value}
        onEditorChange={(content: string) => onChange(content)}
        init={{
          skin: 'rounded-corner',
          content_css: 'rounded-corner',
          height: 153,
          menubar: false,
          plugins: 'lists advlist',
          toolbar: 'blocks | bold italic | alignleft aligncenter alignright | bullist numlist',
          block_formats: 'Paragraph=p; Heading 2=h2; Heading 3=h3',
          content_style: `
            body {
              font-family: 'Inter', sans-serif;
              line-height: 1.5;
              margin: 8px;
            }
            h2 { font-size: 1.5em; }
            h3 { font-size: 1.17em; }
          `,
        }}
      />
    </div>
  );
};

export default TinyEditor;