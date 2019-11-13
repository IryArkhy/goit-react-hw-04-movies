import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import T from 'prop-types';
import movieAPI from '../../servises/movies-api';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    // const { location } = this.props;
    // const query = new URLSearchParams(location.search).get('query');
    // if (!query) return;
    movieAPI
      .fetchTrendingMovies()
      .then(movies => {
        this.setState({
          movies,
        });
      })
      .catch(err => console.log(err));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { location } = this.props;
  //   // const prevQuery = prevProps.location.search;
  //   const prevQuery = new URLSearchParams(prevProps.location.search).get(
  //     'query',
  //   );

  //   const nextQuery = new URLSearchParams(location.search).get('query');

  //   if (prevQuery === nextQuery) return;

  //   movieAPI.fetchSearchWithQuery(nextQuery).then(movies =>
  //     this.setState({
  //       movies,
  //     }),
  //   );
  // }

  // setSearchQuery = serchQuery => {
  //   // програмная навигация
  //   this.props.history.push({
  //     ...this.props.location,
  //     search: `query=${serchQuery}`,
  //   });
  // };

  render() {
    const { match } = this.props;

    console.log(match);
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <ul className={styles.movies}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
              {/* <Link to={`${match.url}/${movie.id}`}>
                {movie.original_title}
              </Link> */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
// const HomePage = () => {
//   return (
//     <ul className={styles.gallery}>
//       {images.map(imageObj => (
//         <li key={imageObj.id}>
//           <PhotoCard imageObj={imageObj} openModal={openModal} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// Gallery.propTypes = {
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
