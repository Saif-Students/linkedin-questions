import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";


function Layout() {
    return (
      <>
        <div className="w-full">
        <Navbar />
          {/* This is where the routed content will appear */}
          <Outlet />
        </div>
      </>
    );
  }


export default Layout