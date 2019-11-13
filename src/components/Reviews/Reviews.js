import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import T from 'prop-types';
import movieApi from '../../servises/movies-api';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: null,
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
      </section>
    );
  }
}

export default Reviews;
