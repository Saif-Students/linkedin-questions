import { Link } from "react-router-dom";
import { questionmark } from "../../assets";
import Line from "../others/line";
import Line2 from "../others/Line2";
import Line3 from "../others/Line3";


function HeroSection() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
      <Line />
      {/* Title Section */}
      <div className="flex flex-col md:flex-row  w-full gap-6 items-center text-center md:items-start md:text-left">
        <img className="w-[48px]" src={questionmark} alt="" />
        <h1 className="uppercase select-none text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-tight font-semibold">
          Grow in your career and ask Questions from <span className="text-[#411950]">  Saif</span>
        </h1>
      </div>

      <Line2 />

      {/* Paragraph and Button Section */}
      <div className="flex flex-col mb-6  md:flex-row w-full items-center justify-center md:justify-between mt-4 space-y-4 md:space-y-0">
        <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] select-none leading-snug font-bold uppercase text-center md:text-left">
          A community of excellent Developers
        </p>

        <Link
          to="/ask-question"
          className="hover:scale-110 transition-transform lg:ml-5 text-xl md:text-2xl lg:text-3xl select-none uppercase font-hand-text font-bold bg-[#2A2A2A] rounded-full text-amber-50 px-4 py-2 inline-block"
        >
          ASK a Question
        </Link>
      </div>

      <Line3 />
    </div>
  );
}

export default HeroSection;
