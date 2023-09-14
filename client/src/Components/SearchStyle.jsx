import React, { useContext, useState } from "react";
import { DataContext } from "./MovieContext";
import DisplaySearchCard from "./DisplayCard";
import Reviews from "./Reviews";
import { motion } from "framer-motion";
import Alert from "./Alert";

const SearchStyle = () => {
  const {
    handleSubmit,
    handleChange,
    searchData,
    apiData,
    addToFavoritesDb,
    toggleReviews,
    reviewToggle,
    toggleAlert,
    showAlert,
    setAlertMessage,
    alertMessage,
  } = useContext(DataContext);

  const cardVariants = {
    open: {
      x: "-15%",
    },
    closed: {
      x: "0%",
    },
  };

  const cardVariants2 = {
    open: {
      x: "15%",
    },
    closed: {
      x: "0%",
    },
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex justify-center"
      >
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative w-3/4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            name="title"
            value={searchData.title}
            type="text"
            placeholder="Movie Title"
            onChange={handleChange}
            required
            className="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <motion.div
          initial={toggleReviews ? "open" : "closed"}
          animate={toggleReviews ? "open" : "closed"}
          variants={cardVariants}
          transition={{ duration: 3.0 }}
        >
          <DisplaySearchCard
            apiData={apiData}
            addToFavoritesDb={addToFavoritesDb}
            toggleReviews={toggleReviews}
            reviewToggle={reviewToggle}
            showAlert={showAlert}
            setAlertMessage={setAlertMessage}
            alertMessage={alertMessage}
          />
        </motion.div>

        <motion.div
          className="relative"
          initial={toggleReviews ? "open" : "closed"}
          animate={toggleReviews ? "open" : "closed"}
          variants={cardVariants2}
          transition={{ duration: 3.0 }}
        >
          {toggleReviews && <Reviews />}
        </motion.div>
      </div>
      <div className=" w-1/2 absolute top-1/2 transform translate-x-1/2 translate-y-1/2">
        {toggleAlert && <Alert alertMessage={alertMessage} />}
      </div>
    </>
  );
};
export default SearchStyle;
