import {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAddReviewAction} from '../../store/api-actions';
import {getFilm} from '../../store/film-process/selector';
import {getError} from '../../store/review-process/selector';
import {
  INITIAL_STATE_FILM_RATING_STARS,
  MAX_REVIEW_TEXT_LENGTH,
  MAX_STARS_COUNT,
  MIN_REVIEW_TEXT_LENGTH
} from '../../const';

function AddReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    setIsSend(error !== undefined);
    evt.preventDefault();
    dispatch(fetchAddReviewAction({comment: rating.reviewText, filmId: film?.id, rating: rating.ratingStars}));
  };

  const film = useAppSelector(getFilm);
  const [canPost, setCanPost] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [rating, setRating] = useState({
    ratingStars: INITIAL_STATE_FILM_RATING_STARS,
    reviewText: '',
  });
  return (
    <div className="add-review">
      <p>{error}</p>
      <form className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10)].map((_, index) => (
              <>
                <input className="rating__input" id={`star-${MAX_STARS_COUNT - index}`} type="radio" disabled={isSend} name="rating"
                  value={10 - index}
                  checked={rating.ratingStars === (MAX_STARS_COUNT - index)} onChange={() => {
                    setRating(
                      {...rating, ratingStars: (MAX_STARS_COUNT - index)});
                  }}
                />
                <label className="rating__label" htmlFor={`star-${MAX_STARS_COUNT - index}`}>Rating {MAX_STARS_COUNT - index}</label>
              </>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" disabled={isSend} id="review-text"
            placeholder="Review text"
            onChange={(evt) => {
              setRating({...rating, reviewText: evt.target.value});
              if (rating.reviewText.length >= MIN_REVIEW_TEXT_LENGTH && rating.reviewText.length <= MAX_REVIEW_TEXT_LENGTH) {
                setCanPost(true);
              } else {
                setCanPost(false);
              }
            }}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" disabled={!canPost || isSend} type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
