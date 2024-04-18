import React, { useState } from "react";
import iamgeData from "../data/ImageData";

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? iamgeData.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === iamgeData.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-container">
        <img src={iamgeData[currentIndex].image} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="navigation">
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default ImageGallery;
