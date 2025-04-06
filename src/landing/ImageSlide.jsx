import { ReactComponent as LeftArrow } from "./leftArrow.svg";
import { ReactComponent as RightArrow } from "./rightArrow.svg";
import img1 from "./image_1.png";
import img2 from "./image_2.png";
import img3 from "./image_3.png";
import { useState } from "react";

const images = [img1, img2, img3];

function ImageSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center space-x-4 ">
      <div className="flex space-x-[180px] items-center mb-[97px] mt-[100px]">
        <div>
          <button
            onClick={prevSlide}
            className="p-[27px] sm:p-6 bg-gray-200 rounded-full"
          >
            <LeftArrow />
          </button>
        </div>
        <p className="text-center">
          <span className="text-[#252432] font-pretendard text-3xl sm:text-5xl font-bold leading-tight sm:leading-[120%]">
            Check our Work
          </span>
          <br />
          <span className="text-[#3C3C3C] font-pretendard text-lg sm:text-2xl">
            Team{" "}
          </span>
          <span className="text-[#3C3C3C] font-pretendard text-lg sm:text-2xl font-bold">
            SOPIO
          </span>
        </p>
        <div>
          <button
            onClick={nextSlide}
            className="p-[27px] sm:p-6  bg-gray-200 rounded-full"
          >
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden gap-4 sm:gap-[100px] justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={images[(currentIndex + index) % images.length]}
            alt="slide"
            className={`w-1/2 sm:w-1/3 h-[300px] sm:h-[450px] lg:h-[550px] object-cover transition-transform duration-300 rounded-2xl transform ${
              index === 1 ? "scale-110 sm:scale-100 shadow-lg" : "scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlide;
