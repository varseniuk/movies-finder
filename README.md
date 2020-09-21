# Application for searching and displaying movies from IMDB using OMDB API

[DEMO LINK](https://varseniuk.github.io/movies-finder//)

# Technologies used:

- ReactJS (React hooks),
- Redux,
- JavaScript,
- CSS (SASS, Bulma),
- HTML

# Functional:

The application downloads movies from the server via the API at a given request. 
There is a pagination. 
Clicking the "Show details" button loads the detailed information about the selected movie.
The history of the last 10 requests is saved. You can click on any saved request to make a search request again, or you can delete a specific request from history.
When the page is reloaded, the previous state is retained.
When you click the "clear" button, everything is cleared and returned to its original state.