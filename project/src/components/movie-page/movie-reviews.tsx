import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchReviewAction} from '../../store/api-actions';
import NotFound from '../../pages/not-found/not-found';
import {getFilm} from '../../store/film-process/selector';
import {getReviews} from '../../store/review-process/selector';


function MovieReviews(): JSX.Element {
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchReviewAction(film?.id));
  }, [dispatch, film?.id]);
  const review = useAppSelector(getReviews);
  if (film === undefined)
  {return <NotFound/>;}
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
                <time className="review__date" dateTime={reviews.date}>{new Date(reviews.date).toLocaleDateString('en-us', {year:'numeric', month:'long', day:'numeric'})}</time>
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
