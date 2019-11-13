import React, { Component } from 'react';
import T from 'prop-types';
import movieApi from '../../servises/movies-api';
import styles from './Cast.module.css';

// const Cast = ({ id}) => {
//   t
//   return (
//     <ul className={styles.Cast}>
//       {images.map(imageObj => (
//         <li key={imageObj.id}>0</li>
//       ))}
//     </ul>
//   );
// };

class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    const { movie } = this.props;
    const movieID = this.props.match.params.movieId;

    this.getCredits(movieID);
  }

  getCredits = id => {
    movieApi.fetchCredits(id).then(cast => {
      this.setState({
        cast,
      });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <section>
        {cast && (
          <ul>
            {cast.map(person => (
              <li key={person.cast_id}>
                <object
                  data={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                  type="image/png"
                  width="120"
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/12/04/03/mask-1587566_1280.png"
                    alt="actor"
                    width="140"
                  />
                </object>
                <p>{person.name}</p>
                <p>Character: {person.character}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default Cast;

// Cast.propTypes = {
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
