import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="w-full relative flex items-center" id="About">
      <Fade top distance="20%" duration={2000}>
        <div className="mx-auto ">
          <div className="my-12">
            <h1 className="text-3xl font-bold text-white lg:text-4xl text-center mb-6 tracking-wider">
              About This App
            </h1>

            <p className="tracking-wide text-base font-normal text-white leading-loose mx-auto w-5/6 text-center">
              Introducing InfoMovie, a web app designed to help you determine if
              a movie is worth watching. With just a simple search, you'll
              receive a wealth of information about any movie, allowing you to
              make an informed decision about what to watch. Say goodbye to the
              uncertainty of movie recommendations, and hello to a reliable
              source of movie information. Try InfoMovie today and experience
              the convenience and confidence of informed movie-watching.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
