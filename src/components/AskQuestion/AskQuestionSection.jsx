import { questionmark } from "../../assets";
import Line from "../others/line";
import Line2 from "../others/Line2";
import QuestionForm from "./QuestionForm";
function AskQuestionSection() {
  return (
    <div className="w-full">
        <Line />
         <div className="flex flex-col md:flex-row  w-full gap-6 items-center text-center md:items-start md:text-left">
        <img className="w-[48px]" src={questionmark} alt="" />
        <h1 className="uppercase select-none text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-tight font-semibold">
          Ask any Question
        </h1>
      </div>
      <Line2/>
      <QuestionForm/>
    </div>
  )
}

export default AskQuestionSection
