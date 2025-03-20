import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-2xs flex flex-col bg-gray-200 p-2 border-1">
      <strong>Project 11(react-hook-form & zod)</strong>
      <Link to="/form1" className="hover:text-green-600 cursor-wait">
        Form1
      </Link>
      <Link to="/form2" className="hover:text-green-600">
        Form2
      </Link>
      <Link to="/rhf" className="hover:text-green-600">
        React Hook Form
      </Link>
      <Link to="/simple-form" className="hover:text-green-600">
        Simple Form
      </Link>
      <Link to="/react-select" className="hover:text-green-600">
        React Select
      </Link>
      <Link to="/my-select" className="hover:text-green-600">
        React Select - 2
      </Link>
      <Link to="/datalist-to-checkbox" className="hover:text-green-600">
        DataList to Checkbox
      </Link>
    </nav>
  );
};

export default Nav;
