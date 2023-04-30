import video from "../assets/video__1.mp4";
import { Link } from "react-router-dom";

function BackgroundSlider() {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-blue-950 to-black flex justify-center items-center flex-col overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <video preload='auto' autoPlay muted loop className="w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Link to='/home' className="z-10 absolute bottom-0 max-sm:bottom-2 left-0">
        <div className="z-10 text-white grid grid-flow-row mt-auto ml-5 w-screen absolute max-sm:ml-2 bottom-32">
          <p className="text-3xl pb-4 text-gray-600 max-sm:text-xl pb-2">EXPLORE</p>
          <h1 className="text-4xl font-bold text-gray-500 max-sm:text-lg">
            SOLAR SYSTEM
            <span className="ml-2 text-gray-700">
              &#x2192; {/* Right arrow */}
            </span>
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default BackgroundSlider;
