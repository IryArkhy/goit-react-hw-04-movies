import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import SearchForm from '../../components/SearchForm';
import moviesAPI from '../../servises/movies-api';
import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func.isRequired,
    }).isRequired,
    location: T.shape({
      pathname: T.string.isRequired,
      search: T.string.isRequired,
      key: T.string.isRequired,
    }).isRequired,
    match: T.shape({
      params: T.shape({ movieId: T.string }),
      path: T.string.isRequired,
      url: T.string.isRequired,
    }).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search).get('query');
    if (!query) return;
    moviesAPI.fetchMovies(query).then(movies =>
      this.setState({
        movies,
      }),
    );
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );

    const nextQuery = new URLSearchParams(location.search).get('query');

    if (prevQuery === nextQuery) return;

    moviesAPI.fetchMovies(nextQuery).then(movies =>
      this.setState({
        movies,
      }),
    );
  }

  setSearchQuery = serchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${serchQuery}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <div className={styles.MoviesPage}>
        <SearchForm onSearch={this.setSearchQuery} />
        <ul className={styles.MoviesPage_list}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${match.url}/${movie.id}`}>
                <span>&#8680;</span>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
