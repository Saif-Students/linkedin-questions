import { linkedIn } from "../../assets";

function ImagesRow() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center mt-8 gap-10 p-4">
      {/* Sticky Note */}
      <div className="note w-full md:w-1/3 relative">
        <div className="pin h-[60px] w-[60px] md:h-[100px] md:w-[100px] top-[-30px] md:top-[-50%] left-0 translate-y-[100%] bg-[#862A20] rounded-full shadow-lg absolute"></div>
        <div className="bg-[#E0F2FE] w-full h-[250px] md:h-[300px] shadow-lg flex flex-col gap-4 items-end p-4 md:p-6">
          <h1 className="text-xl md:text-3xl font-semibold">👉 Coding Questions</h1>
          <h1 className="text-xl md:text-3xl font-semibold">👉 Development Questions</h1>
          <h1 className="text-xl md:text-3xl font-semibold">👉 AI / ML Questions</h1>
          <h1 className="text-xl md:text-3xl font-semibold">👉 Career Questions</h1>
          <h1 className="text-xl md:text-3xl font-semibold">👉 Confusion</h1>
        </div>
      </div>

      {/* LinkedIn Image */}
      <img 
        className="w-full md:w-1/2 rotate-0 md:rotate-[-5deg]" 
        src={linkedIn} 
        alt="linkedin image" 
      />
    </div>
  );
}

export default ImagesRow;
