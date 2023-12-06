import { UseFormSetValue } from "react-hook-form";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface Props {
  placeholder: string;
  value?: string;
  setValue: UseFormSetValue<any>;
  registerName: string;
}
const Editor = ({ setValue, placeholder, value, registerName }: Props) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        placeholder: placeholder,
      }}
      data={value}
      onChange={(_event, editor) => {
        const data = editor.getData();
        setValue(registerName, data);
      }}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          writer.setStyle(
            "min-height",
            "100px",
            editor.editing.view.document.getRoot() as any
          );
        });
      }}
    />
  );
};

export default Editor;
