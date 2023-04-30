import React from "react";
import {Link} from "react-router-dom"
function Header() {
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
      <div className="w-fit">
        <h6 className="text-gray-50">Cosmos Reactors</h6>
      </div>
      </Link>
        <ul className="flex flex-row justify-between items-center w-140">
          {link.map((item) => (
            <li className="text-xs mr-5 text-gray-50" key={item.id}>{item.title}</li>
          ))}
        </ul>
    
    </div>
  );
}

export default Header;
