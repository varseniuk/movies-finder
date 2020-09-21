import React from 'react';

import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({
  movies = [],
  showDetails,
}) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbID}
        showDetails={showDetails}
        {...movie}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  showDetails: PropTypes.func.isRequired,
};
