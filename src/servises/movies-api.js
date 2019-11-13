const key = '11b4a623d9aafb08171a1bc5505fc6f9';

const fetchMovies = (keyWord = '') => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${keyWord}&page=1`,
  )
    .then(response => response.json())
    .then(data => data.results);
};

const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${key} `,
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.results;
    });
};

const fetchMovieDetails = id => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`).then(
    res => res.json(),
  );
};

const fetchCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`,
  )
    .then(res => res.json())
    .then(data => {
      return data.cast;
    });
};

const fetchReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}`,
  )
    .then(res => res.json())
    .then(data => {
      return data.results;
    });
};

export default {
  fetchMovies,
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchCredits,
  fetchReviews,
};
