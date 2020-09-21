const API_URL = `https://www.omdbapi.com/`;

export const fetchMovies = async(title, page) => {
  const movie = await fetch(
    `${API_URL}?s=${title}&apikey=81cd08c7&page=${page}`,
  );

  return movie.json();
};

export const fetchMovieById = async(id) => {
  const movie = await fetch(`${API_URL}?apikey=81cd08c7&i=${id}`);

  return movie.json();
};
