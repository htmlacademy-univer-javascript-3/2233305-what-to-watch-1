import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchReviewAction} from '../../store/api-actions';
import NotFound from '../../pages/not-found/not-found';
import {getFilm} from '../../store/film-process/selector';
import {getLoadedDataStatusReview, getReviews} from '../../store/review-process/selector';
import Spinner from '../spinner/spinner';
import MovieReviewColumn from './movie-review-column';


function MovieReviews(): JSX.Element {
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getLoadedDataStatusReview);
  useEffect(() => {
    dispatch(fetchReviewAction(film?.id));
  }, [dispatch, film?.id]);
  const reviews = useAppSelector(getReviews);
  if (isLoading)
  {return <Spinner/>;}
  if (film === undefined)
  {return <NotFound/>;}
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => <MovieReviewColumn review={review} key={review.id}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2 + 1, reviews.length).map((review) => <MovieReviewColumn review={review} key={review.id}/>)}
      </div>
    </div>
  );
}

export default MovieReviews;
