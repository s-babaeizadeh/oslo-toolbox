import { Link } from "react-router-dom";
import SidebarNav from "./SidebarNav";
import { useState } from "react";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sticky left-0 h-full border-r-2 border-gray-200 bg-gray-50 transition-transform duration-300 ${isOpen ? "w-56" : "w-16"}  md:w-56`}>
      <div className="flex  items-center justify-center border-b-2 border-gray-200 sm:p-3 md:p-6">
        <Link to={"/"} className="h-full p-2 sm:p-1 md:p-4">
          <img className="w-8 sm:w-10 md:w-20 lg:w-32" src="/images/toolbox.webp" alt="Logo" />
        </Link>
      </div>

      <nav className="flex h-5/6 flex-col overflow-hidden">
        <SidebarNav isOpen={isOpen} />
      </nav>
      {isOpen && (
        <nav className="flex h-5/6 flex-col overflow-hidden">
          <SidebarNav isOpen={isOpen} />
        </nav>
      )}
    </div>
  );
}

export default SideBar;
