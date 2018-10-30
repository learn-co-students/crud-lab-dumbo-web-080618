import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const reviewsForRestaurant = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {reviewsForRestaurant.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} /> )}
      </ul>
    );
  }
};

export default Reviews;
