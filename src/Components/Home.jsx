import React from 'react';
import Header from "./Header";
import Planets from './Planets';
import NavBar from './NavBar';
import video from "../assets/home.mp4";

export const Home = () => {
  return (
    <div className="relative">
      <video preload='auto' autoPlay muted loop className="absolute top-0 left-0 w-full h-screen overflow-hidden object-cover z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <Header />
        <Planets />
        <NavBar />
      </div>
    </div>
  );
};
