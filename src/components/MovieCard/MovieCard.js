import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';

export const MovieCard = ({
  Title,
  Year,
  Type,
  imdbID,
  Poster,
  showDetails,
}) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={Poster}
          alt="Film logo"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-8">{Title}</p>
          <p>{`Type: ${Type}`}</p>
          <p>{`Release year: ${Year}`}</p>
          <button
            type="button"
            onClick={() => showDetails(imdbID)}
            className="button details-button"
          >
            Show details
          </button>
        </div>
      </div>
    </div>
  </div>
);

MovieCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  showDetails: PropTypes.func.isRequired,
};
