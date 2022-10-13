import {Film} from '../mocks/film';
import {Review} from '../mocks/reviews';

export type FilmProps = {
  film: Film;
};


export type FilmsProps = {
  films: Film[]
}

export type ReviewsProps = {
  reviews: Review[]
}
