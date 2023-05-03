import React, { useState, useEffect } from "react";

function Planets() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1619450039435-5c5b3e4e4f19"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // update the backgroundImage state here
      setBackgroundImage(
        "https://images.unsplash.com/photo-1630098365035-1f20a8e5cfd9"
      );
    }, 5000); // time interval in milliseconds, change as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-blur"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-white p-4 sm:p-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          Latest News
        </h1>
        <div className="bg-white bg-opacity-20 rounded-lg px-4 sm:px-8 py-6 sm:py-8 w-full sm:max-w-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            Title
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <picture>
          <img
            src="https://images.unsplash.com/photo-1620901023292-30559f69d685"
            alt="news"
            className="w-full h-auto rounded-lg"
          />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Planets;
