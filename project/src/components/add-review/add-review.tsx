import {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAddReviewAction} from '../../store/api-actions';
import {getFilm} from '../../store/film-process/selector';
import {getError} from '../../store/review-process/selector';

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
    ratingStars: 8,
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
                <input className="rating__input" id={`star-${10 - index}`} type="radio" disabled={isSend} name="rating"
                  value={10 - index}
                  checked={rating.ratingStars === (10 - index)} onChange={() => {
                    setRating(
                      {...rating, ratingStars: (10 - index)});
                  }}
                />
                <label className="rating__label" htmlFor={`star-${10 - index}`}>Rating {10 - index}</label>
              </>
            ))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" disabled={isSend} id="review-text"
            placeholder="Review text"
            onChange={(evt) => {
              setRating({...rating, reviewText: evt.target.value});
              if (rating.reviewText.length >= 50 && rating.reviewText.length <= 400) {
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
