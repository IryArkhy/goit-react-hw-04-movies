import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieAPI from '../../servises/movies-api';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    movieAPI
      .fetchTrendingMovies()
      .then(movies => {
        this.setState({
          movies,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2 className={styles.inTrend}>Trending today</h2>
        <ul className={styles.inTrend_list}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>
                <span>&#8680;</span>
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
