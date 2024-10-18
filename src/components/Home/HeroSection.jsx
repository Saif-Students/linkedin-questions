import { Link } from "react-router-dom";
import { questionmark } from "../../assets";
import Line from "../others/Line";
import Line2 from "../others/Line2";
import Line3 from "../others/Line3";
import { motion } from "framer-motion"; // Import Framer Motion

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <Line />

      {/* Title Section */}
      <div className="flex flex-col md:flex-row w-full gap-6 items-center text-center md:items-start md:text-left">
        <img className="w-[48px]" src={questionmark} alt="" />
        <motion.h1
          variants={fadeIn}
          className="uppercase select-none text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-tight font-semibold"
        >
          Grow in your career and ask Questions from{" "}
          <span className="text-[#411950]">Saif</span>
        </motion.h1>
      </div>

      <Line2 />

      {/* Paragraph and Button Section */}
      <div className="flex flex-col mb-6 md:flex-row w-full items-center justify-center md:justify-between mt-4 space-y-4 md:space-y-0">
        <motion.p
          variants={fadeIn}
          className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] select-none leading-snug font-bold uppercase text-center md:text-left"
        >
          A community of excellent Developers
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 item-center justify-center">
          <Link
            to="/ask-question"
            className="hover:scale-110 transition-transform lg:ml-5 text-xl md:text-2xl lg:text-3xl select-none uppercase font-hand-text font-bold bg-[#2A2A2A] rounded-full text-amber-50 px-4 py-2 inline-block"
          >
            ASK a Question
          </Link>

          <Link
            to="/all-questions"
            className="hover:scale-110 transition-transform lg:ml-5 text-xl md:text-2xl lg:text-3xl select-none uppercase font-hand-text font-bold bg-[#2A2A2A] rounded-full text-amber-50 px-4 py-2 inline-block"
          >
            ALL Question
          </Link>
        </div>
      </div>

      <Line3 />
    </motion.div>
  );
}

export default HeroSection;
