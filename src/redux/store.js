import { createStore } from 'redux';

// action types
export const SET_MOVIES = 'setMovies';
export const SET_DETAILED_MOVIE = 'setDetailedMovie';
export const SET_HISTORY = 'setHistory';
export const SET_CURRENT_QUERY = 'setCurrentQuery';
export const SET_TOTAL_RESULTS = 'setTotalResults';
export const SET_CURRENT_PAGE = 'setCurrentPage';
export const SET_PREV_STATE = 'setPrevState';

// selectors
export const getMovies = state => state.movies;
export const getDetailedMovie = state => state.detailedMovie;
export const getHistory = state => state.searchHistory;
export const getCurQuery = state => state.currentQuery;
export const getTotalResults = state => state.totalResults;
export const getCurrentPage = state => state.currentPage;

// action creators
export const setMovies = movies => ({
  type: SET_MOVIES,
  movies,
});

export const setDetailedMovie = detailedMovie => ({
  type: SET_DETAILED_MOVIE,
  detailedMovie,
});

export const setHistory = searchHistory => ({
  type: SET_HISTORY,
  searchHistory,
});

export const setCurrentQuery = currentQuery => ({
  type: SET_CURRENT_QUERY,
  currentQuery,
});

export const setTotalResults = totalResults => ({
  type: SET_TOTAL_RESULTS,
  totalResults,
});

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case SET_DETAILED_MOVIE:
      return {
        ...state,
        detailedMovie: action.detailedMovie,
      };
    case SET_HISTORY:
      return {
        ...state,
        searchHistory: action.searchHistory,
      };
    case SET_CURRENT_QUERY:
      return {
        ...state,
        currentQuery: action.currentQuery,
      };
    case SET_TOTAL_RESULTS:
      return {
        ...state,
        totalResults: action.totalResults,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

const initialState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {
    movies: [],
    detailedMovie: null,
    searchHistory: [],
    currentQuery: '',
    totalResults: 0,
    currentPage: 1,
  };

const store = createStore(reducer);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
