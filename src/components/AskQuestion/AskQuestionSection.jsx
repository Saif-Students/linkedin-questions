import { motion } from "framer-motion";
import { questionmark } from "../../assets";
import Line from "../others/Line";
import Line2 from "../others/Line2";
import QuestionForm from "./QuestionForm";

function AskQuestionSection() {
  return (
    <div className="w-full">
      <Line />
      <motion.div
        className="flex flex-col md:flex-row w-full gap-6 items-center text-center md:items-start md:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          className="w-[48px]"
          src={questionmark}
          alt=""
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="uppercase select-none text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-tight font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Ask any Question
        </motion.h1>
      </motion.div>
      <Line2 />
      <QuestionForm />
    </div>
  );
}

export default AskQuestionSection;
