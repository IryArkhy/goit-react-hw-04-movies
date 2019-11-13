import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import T from 'prop-types';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import movieAPI from '../../servises/movies-api';
import styles from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const movieID = this.props.match.params.movieId;
    console.log(this.props.match.params);
    movieAPI
      .fetchMovieDetails(movieID)
      .then(movie => {
        this.setState({
          movie,
        });
      })
      .catch(err => console.log(err));
  };

  moveToPreviousPage = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <div className={styles.details_page}>
        <button onClick={this.moveToPreviousPage} type="button">
          GO BACK
        </button>

        <h2>Details</h2>
        {movie && (
          <>
            <section className={styles.details_info}>
              <h3>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h3>
              <p> User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(item => ` ${item.name} `)}</p>
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                width="320"
                alt="poster"
              />
            </section>
            <section className={styles.details_additional}>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to={`${match.url}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`${match.url}/reviews`}>Reviews</Link>
                </li>
              </ul>
              <Switch>
                <Route path={`${match.path}/cast`} component={Cast} />
                <Route path={`${match.path}/reviews`} component={Reviews} />
              </Switch>
            </section>
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
