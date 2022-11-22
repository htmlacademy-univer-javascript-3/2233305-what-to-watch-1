import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {fetchReviewAction} from "../../store/api-actions";


function MovieReviews(): JSX.Element {
  const {film, review} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {dispatch(fetchReviewAction(film?.id))})
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {review.map((reviews) => (
          <div className="review" key={reviews.id}>
            <blockquote className="review__quote">
              <p className="review__text">{reviews.comment}
              </p>

              <footer className="review__details">
                <cite className="review__author">{reviews.user.name}</cite>
                <time className="review__date" dateTime={reviews.date}>{reviews.date}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{reviews.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieReviews;
