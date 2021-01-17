import React from 'react';
// import StarRatings from 'react-star-ratings';;
import moment from 'moment';

const Card = ({ movie }) => (
  <div className="col-span-3 rounded bg-white overflow-hidden max-w-xs mx-auto sm:mx-1 md:mx-2 my-3 shadow-lg wow slideInTop">
    <img
      className="w-full hover:opacity-75"
      style={{ objectFit: 'cover', objectPosition: '100% 30%', height: '16rem' }}
      src={movie.Poster || 'https://placeimg.com/640/480/any'}
      alt={movie.Title}
    />
    <div className="pl-3 pt-5 pb-3">
      <div className="font-bold text-md theme-text">{movie.Title}</div>
      <div className="flex justify-start text-gray-600">
        <span className="text-xs font-medium pr-3">
          •
          {moment(movie.premiered).format('YYYY')}
        </span>
        <span className="text-xs font-medium pr-3">
          •
          {movie.runtime}
          {' '}
          mins
        </span>
        {/* <div className="card-star-rating">
            <StarRatings
              rating={movie.rating.average / (10 * 6)}
              starRatedColor="orange"
              numberOfStars={6}
              name="rating"
              clasname="font-sm"
            />
          </div> */}
      </div>
    </div>
    {/* <div className="pl-1 pr-1 pb-5">
        {movie.genres.map((genre) => (
          <span
            key={genre.id}
            className="inline-block bg-gray-300 rounded-full px-2 py-1 text-xs font-semibold "
          >
            <small>
              #
              {genre}
            </small>
          </span>
        ))}
      </div> */}
  </div>
);

export default Card;















