import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import T from 'prop-types';
import SearchForm from '../../components/SearchForm';
import moviesAPI from '../../servises/movies-api';
import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');
    if (!query) return;
    moviesAPI.fetchMovies(query).then(movies =>
      this.setState({
        movies,
      }),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // const prevQuery = prevProps.location.search;
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );

    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );

    if (prevQuery === nextQuery) return;

    moviesAPI.fetchMovies(nextQuery).then(movies =>
      this.setState({
        movies,
      }),
    );
  }

  setSearchQuery = serchQuery => {
    // програмная навигация
    this.props.history.push({
      ...this.props.location,
      search: `query=${serchQuery}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    console.log(this.props.history);
    return (
      <div className={styles.MoviesPage}>
        <SearchForm onSearch={this.setSearchQuery} />
        {movies.map(movie => (
          <li key={movie.id}>
            {/* <Link to={`movies/${movie.id}`}>{movie.original_title}</Link> */}
            <Link to={`${match.url}/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default MoviesPage;

// MoviesPage.propTypes = {
//   images: T.arrayOf(
//     T.shape({
//       id: T.number,
//       pageURL: T.string,
//       type: T.string,
//       tags: T.string,
//       previewURL: T.string,
//       previewWidt: T.number,
//       previewHeigh: T.number,
//       webformatURL: T.string,
//       webformatWidt: T.number,
//       webformatHeigh: T.number,
//       largeImageURL: T.string,
//       fullHDUR: T.string,
//       imageUR: T.string,
//       imageWidt: T.number,
//       imageHeigh: T.number,
//       imageSiz: T.number,
//       views: T.number,
//       downloads: T.number,
//       favorites: T.number,
//       likes: T.number,
//       comments: T.number,
//       user_id: T.number,
//       user: T.string,
//       userImageURL: T.string,
//     }).isRequired,
//   ).isRequired,
//   openModal: T.func.isRequired,
// };
