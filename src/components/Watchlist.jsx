import { useState } from "react";

const Watchlist = ({ watchlist, handleRemoveFromWatchList }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap my-4 gap-2">
        <div className="flex justify-center h-[3rem] w-[9rem] items-center bg-blue-400 text-white rounded-xl">
          Action
        </div>
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="px-4 h-[3rem] w-[18rem] bg-gray-200 rounded-lg outline-none"
        />
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2" key={movieObj.id}>
                    <td className="flex items-center px-4 py-3">
                      <img
                        className="h-[6rem] w-[10rem] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="Movie poster"
                      />
                      <div className="mx-4 text-xl">
                        {movieObj.original_title}
                      </div>
                    </td>
                    <td>{movieObj.vote_average || "N/A"}</td>
                    <td>{movieObj.popularity || "N/A"}</td>
                    <td>{movieObj.genre_ids[0] || "N/A"}</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="text-red-500 cursor-pointer font-bold"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
