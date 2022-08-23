import React from "react";
import logo from "../assets/lws logo.png";

function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-center gap-5 py-3 items-center">
        <a href="index.html">
          <img className="h-10" src={logo} alt="Learn with Sumit" />
        </a>
        <h2 className="text-black font-bold">Learn with Sumit</h2>
      </div>
    </nav>
  );
}

export default Navbar;
