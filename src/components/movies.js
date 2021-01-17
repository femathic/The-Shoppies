import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Card from './card';

const ShowsPage = () => {
  const { movies } = useContext(GlobalContext);
  return (
    <>
      <div className="pt-24">
        <h4 className="font-semibold text-2xl ml-5">Search Results</h4>
        <hr className="theme-background border-0 h-1 w-24 ml-5" />
        {movies && movies.length > 0 ? (
          <div className="flex flex-wrap overflow-hidden px-2">
            {movies.map((movie) => (
              <div className="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4" key={movie.imdbID}>
                <Card movie={movie} />
              </div>
            ))}
          </div>
        ) : <h4 className="font-semibold text-xl ml-5">No movies found</h4> }
      </div>
    </>
  );
};

export default ShowsPage;
