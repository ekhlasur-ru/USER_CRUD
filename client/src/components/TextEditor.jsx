import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the default theme

function TextEditor() {
  const [value, setValue] = useState('');

  return (
    <ReactQuill className='max-h-[400px] text-xl'
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="Type your text here..."
    />
  );
}

export default TextEditor;
