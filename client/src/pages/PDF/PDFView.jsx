import React, { useState, useEffect } from 'react';

function PDFView() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 5));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-green-400'>
      <div>PDFView</div>
      <div style={{ width: '100%', backgroundColor: '#ccc' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '30px',
            backgroundColor: 'green',
            textAlign: 'center',
            lineHeight: '30px',
            color: 'white'
          }}
        >
          {progress}%
        </div>
        <button>EkhlSUR</button>
      </div>
    </div>
  );
}

export default PDFView;