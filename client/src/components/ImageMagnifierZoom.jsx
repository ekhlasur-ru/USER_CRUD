import React from "react";
import ImageZoom from "react-image-magnifier-zoom";

function ImageMagnifierZoom() {
  return (
    <div className="mt-8 bg-white p-4 text-center">
      <h1 className="my-8 text-center text-8xl font-bold text-blue-600">
        Image Magnifier Example
      </h1>
      <ImageZoom
        src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        width={400}
        height={400}
        magnifierSize={200}
        zoomLevel={3}
        enabled={true}
      />
    </div>
  );
}

export default ImageMagnifierZoom;
