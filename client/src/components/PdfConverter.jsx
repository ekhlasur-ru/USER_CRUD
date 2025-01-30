import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const PdfConverter = () => {
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    const handleFileChange = async (e) => {
        setError('');
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const typedarray = new Uint8Array(e.target.result);
                    const pdf = await pdfjsLib.getDocument(typedarray).promise;
                    let extractedText = '';
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        extractedText += processTextContent(textContent);
                    }
                    setText(extractedText);
                } catch (error) {
                    setError('Failed to read PDF file.');
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const processTextContent = (textContent) => {
        return textContent.items.map(item => item.str).join(' ');
    };

    const handlePreviewClick = () => {
        setShowPreview(!showPreview);
    };

    return (
        <div style={styles.container}>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handlePreviewClick} style={styles.button}>
                {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            {error && <p style={styles.error}>{error}</p>}
            {showPreview && <textarea value={text} readOnly style={styles.textarea} />}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
    },
    textarea: {
        width: '80%',
        height: '300px',
        marginTop: '20px',
        padding: '10px',
        fontSize: '16px',
    },
};

export default PdfConverter;
