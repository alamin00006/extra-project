"use client";

import { useEffect, useRef, useState } from "react";
import { pdfjs } from "react-pdf";
import html2canvas from "html2canvas";

// Use the correct worker from pdfjs-dist
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// Set the workerSrc dynamically
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFToImage = ({ pdfUrl }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!pdfUrl) return;

    const renderPageAsImage = async (pageNumber) => {
      try {
        const loadingTask = pdfjs.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(pageNumber);

        const viewport = page.getViewport({ scale: 2 });
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderTask = page.render({ canvasContext: context, viewport });
        await renderTask.promise;

        const imageCanvas = await html2canvas(canvas);
        setImageUrl(imageCanvas.toDataURL("image/png"));
      } catch (error) {
        console.error("Error rendering PDF:", error);
      }
    };

    renderPageAsImage(1);
  }, [pdfUrl]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {imageUrl ? <img src={imageUrl} alt="PDF page as image" /> : <p>Loading PDF...</p>}
    </div>
  );
};

export default PDFToImage;
