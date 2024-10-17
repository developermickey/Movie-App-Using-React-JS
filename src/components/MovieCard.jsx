import React from "react";

const MovieCard = ({
  poster_path,
  name,
  handleAddToWatchList,
  movieObj,
  handleRemoveFromWatchList,
  watchlist = [],
}) => {
  // Checks if the movie is already in the watchlist
  function doesContain(movieObj) {
    return watchlist.some((movie) => movie.id === movieObj.id);
  }

  return (
    <div
      className="flex flex-col justify-between items-end h-[40vh] w-[185px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 p-2 items-center bg-gray-500/60 rounded-md"
        >
          <i className="fa-solid fa-heart text-red-500"></i>
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 p-2 items-center bg-gray-500/60 rounded-md"
        >
          <i className="fa-regular fa-heart text-white"></i>
        </div>
      )}

      <div className="text-white text-xl w-full bg-black/60 p-2 text-center">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
