import React, { useState } from "react";

const Carousel = ({ images }) => {
  // Ensure images is always an array
  const imageArray = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {imageArray.length > 0 && (
        <div className="overflow-hidden mx-7">
          <img
            src={imageArray[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-72 rounded-lg project-image"
          />
        </div>
      )}

      {/* Next and Previous Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
