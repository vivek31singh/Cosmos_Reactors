import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState();

  const link = [
    {
      id: 1,
      title: "Cosmic Wonders",
    },

    {
      id: 2,
      title: "Space Odyssey",
    },

    {
      id: 3,
      title: "Star Gazing",
    },

    {
      id: 4,
      title: "Planetary Adventures",
    },

    {
      id: 5,
      title: "Galactic Excursions",
    },
  ];

  return (
    <div className="h-12 w-full flex flex-row justify-between items-center backdrop-blur-lg backdrop-filter backdrop-opacity-75">
      <Link to={"/"}>
        <div>
          <h6 className="text-gray-500 text-3xl ml-2 max-sm:text-sm">
            Cosmos Reactors
          </h6>
        </div>
      </Link>
      <ul className="flex flex-row justify-between items-center w-140 max-sm:hidden">
        {link.map(({ title, id }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-gray-100 text-gray-400 max-sm:text-sm"
            key={id}
          >
            {title}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav &&(
        
<ul className=" flex flex-row justify-center items-center absolute top-0 left-0 w-full h-10vh bg-black">
        {link.map(({ title, id }) => (
                  <li
                    className="px-2 cursor-pointer text-gray-500 capitalize py-6 text-xs hover:text-gray-50 duration-200"
                    key={id}
                  >
                    {title}
                  </li>
                ))}
              </ul>
        
      )}
      
    </div>
  );
}

export default Header;
