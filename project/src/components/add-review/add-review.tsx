import {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchAddReviewAction} from '../../store/api-actions';
import {getFilm} from '../../store/film-process/selector';

function AddReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchAddReviewAction({comment: rating.reviewText, filmId: film?.id, rating: rating.ratingStars}));
  };

  const film = useAppSelector(getFilm);
  const [rating, setRating] = useState({
    ratingStars: 8,
    reviewText: '',
  });
  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10)].map((_, index) => (
              <>
                <input className="rating__input" id={`star-${10 - index}`} type="radio" name="rating" value={10 - index}
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
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
            onChange={(evt) => {
              setRating({...rating, reviewText: evt.target.value});
            }}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
