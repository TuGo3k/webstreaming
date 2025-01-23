import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants";
import downloadsection from "../assets/images/downloadsection.jpg";
import services_bg02 from "../assets/images/services_bg02.jpg";
import { GoDownload } from "react-icons/go";
import { PiTelevisionBold } from "react-icons/pi";
import { ImVideoCamera } from "react-icons/im";
const DownloadSection = () => {
  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
  return (
    <section
      className="bg-black text-white py-[130px] px-6 lg:px-16 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${services_bg02})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="space-y-6 w-3/4">
          <motion.h4
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="text-yellow-400 text-sm uppercase font-semibold"
          >
            Online Streaming
          </motion.h4>
          <motion.h2
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="text-4xl font-bold"
          >
            Download Your Shows
            <br />
            Watch Offline.
          </motion.h2>
          <div className="space-y-6">
            {/* Feature 1 */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex items-start space-x-4 border-b-2 border-dotted pb-5"
            >
              <div className="border-dotted border-2 border-yellow-400 rounded-full p-2">
                <div className="p-5 flex items-center justify-center  rounded-full hover:bg-yellow-400 hover:ease-in-out duration-200">
                  <PiTelevisionBold className="size-[38px] " />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Enjoy on Your TV.</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex items-start space-x-4"
            >
              <div className="border-dotted border-2 border-yellow-400 rounded-full p-2">
                <div className="p-5 flex items-center justify-center  rounded-full hover:bg-yellow-400 hover:ease-in-out duration-200">
                  <ImVideoCamera className="size-[38px] " />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Watch Everywhere.</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="exit"
          className="relative mt-8 lg:mt-0 flex justify-center"
        >
          <div className="bg-yellow-400 rounded-lg h-20 w-[200px] absolute -left-[86px] top-48 flex items-center justify-center transform rotate-90 gap-3 cursor-pointer">
            <p className="text-black text-sm font-semibold tracking-widest ">
              DOWNLOAD
            </p>
            <GoDownload className="size-[24px] text-black -rotate-90" />
          </div>
          <div className="h-[409px] w-[532px] rounded-lg  relative">
            <img
              src={downloadsection}
              className="flex space-x-4 rounded-xl"
            ></img>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
