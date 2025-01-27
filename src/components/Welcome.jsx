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
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Hero Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl text-[74px] font-bold mb-[182px]">Acha!</h1>
          <Link
            to="/login"
            className="text-white bg-main-blue px-12 py-4 rounded-md hover:bg-blue-600"
          >
            Start Right Now
          </Link>
        </div>
      </section>

      {/* Section 1 */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="flex items-center w-full max-w-6xl mx-auto">
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
      </section>

      {/* Section 2 */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="flex items-center w-full max-w-6xl mx-auto">
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
      </section>

      {/* Section 3 */}
      <section className="h-screen snap-start flex items-center justify-center">
        <div className="flex items-center w-full max-w-6xl mx-auto">
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
      </section>

      {/* Image Slide Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center">
        <ImageSlide />
      </section>

      {/* FAQ Section */}
      <section className="min-h-screen snap-start flex flex-col items-center justify-center">
        <div className="w-full">
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Welcome;
