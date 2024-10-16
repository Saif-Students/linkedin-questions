import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div className="fixed top-0 right-3 lg:right-5 flex gap-2 lg:gap-5 z-50">
        <div className="drop-shadow-md">
          <Link
            to="/"
            className="bg-stone-200 rounded-b-full text-3xl font-hand-text flex justify-center items-center w-8 lg:w-12 h-16 lg:h-20 cursor-pointer transition-all hover:h-24 lg:hover:h-28"
            style={{ opacity: 1, transform: 'none' }}
          ></Link>
        </div>
        <div className="drop-shadow-md">
          <Link
            to="/ask-question"
            className="bg-stone-300 rounded-b-full text-3xl font-hand-text flex justify-center items-center w-8 lg:w-12 h-16 lg:h-20 cursor-pointer transition-all hover:h-24 lg:hover:h-28"
            style={{ opacity: 1, transform: 'none' }}
          ></Link>
        </div>
        <div className="drop-shadow-md">
          <Link
            to="/all-questions"
            className="bg-stone-400 rounded-b-full text-3xl font-hand-text flex justify-center items-center w-8 lg:w-12 h-16 lg:h-20 cursor-pointer transition-all hover:h-24 lg:hover:h-28"
            style={{ opacity: 1, transform: 'none' }}
          ></Link>
        </div>
        {/* <div className="drop-shadow-md">
          <Link
            to="#projects"
            className="bg-stone-500 rounded-b-full text-3xl font-hand-text flex justify-center items-center w-8 lg:w-12 h-16 lg:h-20 cursor-pointer transition-all hover:h-24 lg:hover:h-28"
            style={{ opacity: 1, transform: 'none' }}
          ></Link>
        </div> */}
      </div>
    );
  }
  
  export default Navbar;
  