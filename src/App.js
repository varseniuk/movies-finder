import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Pagination } from './components/Pagination';
import { Details } from './components/Details';
import { Header } from './components/Header';
import { fetchMovies, fetchMovieById } from './api/api';
import {
  getDetailedMovie,
  getHistory,
  getMovies,
  setDetailedMovie,
  setMovies,
  setHistory,
  getCurQuery,
  getTotalResults,
  setTotalResults,
  getCurrentPage,
  setCurrentPage,
} from './redux/store';

export const App = () => {
  const [notFound, setNotFound] = useState(false);

  const dispatch = useDispatch();

  const movies = useSelector(getMovies);
  const detailedMovie = useSelector(getDetailedMovie);
  const searchHistory = useSelector(getHistory);
  const curQuery = useSelector(getCurQuery);
  const totalResults = useSelector(getTotalResults);
  const currentPage = useSelector(getCurrentPage);

  const updateHistory = (query) => {
    if (searchHistory.includes(query)) {
      return;
    }

    if (searchHistory.length < 10) {
      dispatch(setHistory([...searchHistory, query]));
    } else {
      dispatch(setHistory([...searchHistory.slice(1), query]));
    }
  };

  const findMovies = async(title, page) => {
    const movie = await fetchMovies(title, page);

    if (movie.Response !== 'False') {
      dispatch(setMovies(movie.Search));
      dispatch(setTotalResults(+movie.totalResults));
      updateHistory(title);
    } else {
      setNotFound(true);
    }
  };

  const showDetails = async(id) => {
    const movie = await fetchMovieById(id);

    dispatch(setDetailedMovie(movie));
  };

  const changePage = async(page) => {
    const movie = await fetchMovies(curQuery, page);

    dispatch(setMovies(movie.Search));
    dispatch(setCurrentPage(page));
  };

  const totalPages = Math.floor(totalResults / 10);

  return (
    <div className="page">
      <div className="page-content">
        <Header
          findMovies={findMovies}
          dispatch={dispatch}
          searchHistory={searchHistory}
          notFound={notFound}
          setNotFound={setNotFound}
        />

        <MoviesList
          movies={movies}
          showDetails={showDetails}
        />

        {totalResults > 10 && (
          <Pagination
            pages={totalPages}
            changePage={changePage}
            currentPage={currentPage}
          />
        )}
      </div>

      <div className="sidebar">
        {detailedMovie && (
          <Details {...detailedMovie} />
        )}
      </div>
    </div>
  );
};
