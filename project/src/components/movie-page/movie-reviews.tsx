import {ReviewsProps} from '../../types/types';

function MovieReviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((x) => (
          <div className="review" key={null}>
            <blockquote className="review__quote">
              <p className="review__text">{x.text}
              </p>

              <footer className="review__details">
                <cite className="review__author">{x.author}</cite>
                <time className="review__date" dateTime={x.datetime}>{x.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{x.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieReviews;
