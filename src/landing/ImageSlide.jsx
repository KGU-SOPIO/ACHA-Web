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
    <div className="flex flex-col items-center justify-center space-x-4">
      <div className="flex space-x-[180px] items-center mb-[97px] mt-[100px]">
        <div>
          <button
            onClick={prevSlide}
            className="p-[27px] bg-gray-200 rounded-full"
          >
            &lt;
          </button>
        </div>
        <p className="text-center">
          <span className="text-[#252432] font-pretendard text-[60px] font-bold leading-[120%] mb-[30px]">
            Check our Work
          </span>
          <br />
          <span className="text-[#3C3C3C] text-center font-pretendard text-[24px] font-normal leading-[150%]">
            Team
          </span>{" "}
          <span className="text-[#3C3C3C] font-pretendard text-[24px] font-bold leading-[150%]">
            SOPIO
          </span>
        </p>
        <div>
          <button
            onClick={nextSlide}
            className="p-[27px] bg-gray-200 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden gap-[100px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={images[(currentIndex + index) % images.length]}
            alt="slide"
            className="w-1/3 h-[550px] object-cover transition-transform duration-300 rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlide;
