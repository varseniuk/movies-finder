import React from 'react';
import PropTypes from 'prop-types';

export const Details = props => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={props.Poster}
          alt="Film logo"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-8">{props.Title}</p>
        </div>
      </div>
      <hr />
      <div className="content">
        {props.Plot}
        <hr />
        <a href={`https://www.imdb.com/title/${props.imdbID}/`}>IMDB link</a>
        <hr />
        <p><b>Type:</b></p>
        <p>{props.Type}</p>
        <p><b>Director:</b></p>
        <p>{props.Director}</p>
        <p><b>Actors:</b></p>
        <p>{props.Actors}</p>
        <p><b>Genre:</b></p>
        <p>{props.Genre}</p>
        <p><b>Country:</b></p>
        <p>{props.Country}</p>
        <p><b>Production:</b></p>
        <p>{props.Production}</p>
        <p><b>Released:</b></p>
        <p>{props.Released}</p>
        <p><b>Duration:</b></p>
        <p>{props.Runtime}</p>
        <p><b>IMDB Rating:</b></p>
        <p>{props.imdbRating}</p>
        <p><b>PG rating:</b></p>
        <p>{props.Rated}</p>

      </div>
    </div>
  </div>
);

Details.propTypes = {
  Plot: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
  Actors: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired,
  Country: PropTypes.string.isRequired,
  Production: PropTypes.string.isRequired,
  Released: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
  Rated: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};
