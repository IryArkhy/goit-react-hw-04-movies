import React, { Component } from 'react';
import T from 'prop-types';
import movieApi from '../../servises/movies-api';
import styles from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({ movieId: T.string.isRequired }),
      path: T.string.isRequired,
      url: T.string.isRequired,
    }).isRequired,
  };

  state = {
    cast: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const movieID = match.params.movieId;

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
      <section className={styles.cast}>
        <h2>Cast</h2>
        {cast && (
          <ul className={styles.castList}>
            {cast.map(person => (
              <li key={person.cast_id} className={styles.castList__item}>
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
                <p className={styles.castList__name}>{person.name}</p>
                <p>
                  <span>Character:</span> {person.character}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
export default Cast;
