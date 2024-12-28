import { useEffect, useMemo, useState } from "react";

import LendingImg1 from "../assets/lending1.png";
import LendingImg2 from "../assets/lending2.png";
import { Link } from "react-router-dom";
import Logo from "../assets/sopio_logo.svg";
import { motion } from "framer-motion";

function Welcome() {
  const images = [LendingImg1, LendingImg2, Logo];
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
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="mb-[296px]">
          <h1 className="text-6xl text-[74px] font-bold mb-[182px] mt-[227px]">
            Acha!
          </h1>
          <Link
            to="/login"
            className="text-white bg-main-blue px-12 py-4 rounded-md hover:bg-blue-600"
          >
            Start Right Now
          </Link>
        </div>

        {/*세션1*/}
        <div className="flex items-center w-full max-w-6xl mx-auto mb-[232px]">
          <motion.div
            className="flex-1 text-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            <div className="flex">
              <h1 className="text-4xl font-bold mb-4">너&nbsp;</h1>
              <h1 className="text-4xl font-bold mb-4 text-main-blue">
                과제제출함?
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-end"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ ease: "easeInOut", duration: 1, x: { duration: 1 } }}
          >
            <img
              src={LendingImg1}
              alt="lendingImage 1"
              className="w-[179px] h-[179px]"
            />
          </motion.div>
        </div>

        {/*세션2*/}
        <div className="flex items-center w-full max-w-6xl mx-auto mb-[226px]">
          <motion.div
            className="flex-1 text-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            <img
              src={LendingImg2}
              alt="lendingImage 2"
              className="w-[259px] h-[202px]"
            />
          </motion.div>
          <motion.div
            className="flex-1 flex justify-end"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">곧 다가올 마감일,</h1>
              <h1 className="text-4xl font-bold mb-4 text-main-blue justify-end flex">
                놓치지 마세요!
              </h1>
            </div>
          </motion.div>
        </div>

        {/*세션3*/}
        <div className="flex items-center w-full max-w-6xl mx-auto mb-[236px]">
          <motion.div
            className="flex-1 text-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">"해야지" 생각하고</h1>
              <h1 className="text-4xl font-bold mb-4 text-main-blue">
                잊어버리시진 않으셨나요?
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-end"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              x: { duration: 1 },
            }}
          >
            <img
              src={Logo}
              alt="lendingImage 3"
              className="w-[110px] h-[116px]"
            />
          </motion.div>
        </div>

        <div className="flex justify-center items-center mb-[32px] gap-[188px]">
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
              transform: `translateX(-${(currentIndex + 2) * (33.33 + 5)}%)`,
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
                  className="w-[300px] h-[300px] object-cover rounded-lg mr-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
