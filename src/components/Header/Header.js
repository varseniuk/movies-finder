import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

import ClassNames from 'classnames';
import { setCurrentPage, setCurrentQuery, setHistory } from '../../redux/store';

export const Header = ({
  findMovies,
  dispatch,
  searchHistory,
  notFound,
  setNotFound,
}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="header">
      <div className="header--top">
        <div className="search">
          <form
            className="search-form"
            onSubmit={(event) => {
              event.preventDefault();
              findMovies(inputValue, 1);
              dispatch(setCurrentQuery(inputValue));
              setInputValue('');
              dispatch(setCurrentPage(1));
            }}
          >
            <input
              type="text"
              className={ClassNames({
                'search-input': true,
                'not-found': notFound,
              })}
              value={inputValue.trimLeft()}
              placeholder="Enter movie title..."
              onChange={(event) => {
                setInputValue(event.target.value);
                setNotFound(false);
              }}
            />
            {notFound && (
              <p className="help is-danger">
                Can&apos;t find a movie with such a title
              </p>
            )}
            <button
              type="submit"
              className="button"
            >
              Search
            </button>
            <button
              type="button"
              className="button button--clear"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Clear
            </button>
          </form>
        </div>
        <div>
          <h1 className="page-title">IMDB movies finder</h1>
        </div>
      </div>
      <div className="search-history">
        {searchHistory.length !== 0 && (
          <p className="search-history__caption">Last 10 queries: </p>
        )}
        <ul className="search-history__list">
          {searchHistory.map(query => (
            <li key={query}>
              <button
                type="button"
                className="search-history__delete"
                onClick={() => dispatch(setHistory([...searchHistory
                  .filter(entry => entry !== query)]))}
              >
                x
              </button>
              <button
                type="button"
                className="search-history__item"
                onClick={() => {
                  dispatch(setCurrentPage(1));
                  dispatch(setCurrentQuery(query));
                  findMovies(query, 1);
                }}
              >
                {query}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  findMovies: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  searchHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
  notFound: PropTypes.bool.isRequired,
  setNotFound: PropTypes.func.isRequired,
};
