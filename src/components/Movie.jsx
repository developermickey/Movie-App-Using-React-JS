import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Paginations from "./Paginations";

const Movie = ({
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ad6063b3c8b4632c90f151354c5a3644&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="w-full p-5">
      <div className="text-2xl font-bold text-center w-full py-10">
        Trending Movies
      </div>
      <div className="flex flex-wrap gap-7 justify-center">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              watchlist={watchlist}
              movieObj={movieObj}
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
        <MovieCard />
      </div>
      <Paginations
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Movie;

// https://api.themoviedb.org/3/movie/popular?api_key=ad6063b3c8b4632c90f151354c5a3644&language=en-US&page=1
