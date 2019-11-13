import React, { Component } from 'react';
import T from 'prop-types';
import movieApi from '../../servises/movies-api';
import styles from './Reviews.module.css';

class Reviews extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({ movieId: T.string.isRequired }),
      path: T.string.isRequired,
      url: T.string.isRequired,
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const movieID = match.params.movieId;
    this.getCredits(movieID);
  }

  getCredits = id => {
    movieApi.fetchReviews(id).then(reviews => {
      this.setState({
        reviews,
      });
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <section className="reviews">
        {reviews && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.name}</h3>
                <p>`{review.content}`</p>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && <p>We do not have reviews for this movie</p>}
      </section>
    );
  }
}

export default Reviews;
