import React, { useContext } from "react";
import { DataContext } from "./MovieContext";
import About from "./About";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const LandingPage = () => {
  const { homePage } = useContext(DataContext);

  const favoriteMovies = homePage.map((data) => {
    return (
      <section className="movie-container flex flex-wrap justify-center flex--movie hover:scale-110 p-10">
        <div className="w-[400px] h-[450px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img src={data.poster} className="w-full h-full" />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h3 className="text-3xl font-semibold">{data.title}</h3>
                <span className="my-2">
                  {data.year}, {data.genre}
                </span>
                <span>{data.actors}</span>
                <span>{data.awards}</span>
                <p>{data.plot}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });

  return (
    <div className=" p-12 ">
      <div className="w-full h-screen relative flex items-center text-white">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1800"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center px-12">
          <div>
            <h1 className="text-3xl md:text-6xl leading-tight mb-16">
              Let The Search Begin{" "}
            </h1>
            <Link
              to="/SearchStyle"
              className=" font-medium border border-white py-4 px-8 hover:bg-white hover:text-black"
            >
              Search Movie
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-2 justify-center">
        <About />
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 mt-5">
          <Fade top distance="20%" duration={2500}>
            {favoriteMovies}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
