import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-900 text-white p-2">
        <div>
          <h2 className="ml-7 text-2xl">iTask</h2>
        </div>

        <ul className="flex">
          <li className="text-2xl hover:cursor-pointer hover:text-xl transition-all " >Home</li>
          <li className="mx-5 text-2xl hover:cursor-pointer hover:text-xl transition-all">Your Tasks</li>
        </ul>
    </nav>
  );
};

export default Navbar;
