import React, { useContext } from "react";
import { DataContext } from "./MovieContext";

const Reviews = () => {
  const { apiData } = useContext(DataContext);

  const reviewsDisplay = apiData.map((review) => {
    return (
      <section className="flex flex-wrap justify-center flex--movie hover:scale-110 p-10">
        <div className="w-[420px] h-[500px] bg-transparent cursor-pointer">
          <div className=" w-full h-full bg-gray-100">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
              <h2 className="text-3xl font-semibold">Critics Ratings</h2>
              <h3>{review.Title}</h3>
              {review.Ratings.map((rating) => {
                return (
                  <div className="text-lg" key={rating._id}>
                    <h3>{rating.Source}</h3>
                    <h3>{rating.Value}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  });
  return <div>{reviewsDisplay}</div>;
};

export default Reviews;
