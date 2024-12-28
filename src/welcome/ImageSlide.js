import { useEffect, useMemo, useState } from "react";

import image from "../assets/black_bg.png";

function ImageSlide() {
  const images = [image, image, image];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedImages = useMemo(() => {
    const duplicatedStart = images.slice(-2);
    const duplicatedEnd = images.slice(0, 2);
    return [...duplicatedStart, ...images, ...duplicatedEnd];
  }, [images]);

  const moveToIndex = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 500);
    } else if (currentIndex === images.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    }
  }, [currentIndex, images.length]);
  const handlePrev = () => moveToIndex(currentIndex - 1);
  const handleNext = () => moveToIndex(currentIndex + 1);
  return (
    <div>
      <div className="flex justify-center items-center mb-[100px] gap-[188px]">
        <button
          onClick={handlePrev}
          className="text-black bg-gray-100 rounded-full text-3xl p-[27px]"
        >
          &#8592;
        </button>
        <div>
          <h1 className="text-4xl font-bold text-[60px] pb-[32px]">
            Check our Work
          </h1>
          <h6 className="text-center">뭐죠이건</h6>
        </div>
        <button
          onClick={handleNext}
          className="text-black bg-gray-100 rounded-full text-3xl p-[27px]"
        >
          &#8594;
        </button>
      </div>

      <div className="w-full h-[551px] pb-[200px] overflow-hidden rounded-xl">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            !isTransitioning && "transition-none"
          }`}
          style={{
            transform: `translateX(-${(currentIndex + 2) * (33.33 + 6.5)}%)`,
          }}
        >
          <div className="flex-shrink-0 w-[33.33%] mr-[100px]">
            <img
              src={images[images.length - 1]}
              alt={`Slide ${images.length}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {extendedImages.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[33.33%] mr-[100px]">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-lg"></div>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-[732px] h-[551px] object-cover rounded-lg mr-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlide;
