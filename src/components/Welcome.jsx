import FAQ from "../welcome/FAQ";
import Footer from "./Footer";
import ImageSlide from "../welcome/ImageSlide";
import LendingImg1 from "../assets/lending1.png";
import LendingImg2 from "../assets/lending2.png";
import { Link } from "react-router-dom";
import Logo from "../assets/sopio_logo.svg";
import { motion } from "framer-motion";

function Welcome() {
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
        <div className="mb-[200px]">
          <ImageSlide />
        </div>
        <div className="flex w-full mb-[179px]">
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
