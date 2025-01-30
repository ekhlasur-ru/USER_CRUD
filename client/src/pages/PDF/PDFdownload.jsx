import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resume  from "./Data/Nopage.pdf";

const PDFdownload = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offSet) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  };

  const changePageBack = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    changePage(+1);
  };

  return (
    <div className="App h-screen w-full">
      <header className="App-header">
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {pageNumber > 1 && (
          <button onClick={changePageBack}>Previous Page</button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext}>Next Page</button>
        )}
      </header>
    </div>
  );
};

export default PDFdownload;
