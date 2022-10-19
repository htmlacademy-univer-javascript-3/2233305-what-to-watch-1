import {Review} from '../mocks/reviews';

export type Film = {
  id: string,
  posterAlt: string,
  posterSrc: string,
  imageSrc: string,
  imageAlt: string,
  name: string,
  year: number,
  director : string,
  starring : string[],
  runTime : number,
  genre : string,
  description: string,
  videoLink: string,
  previewVideoLink: string,
  rating : string,
  ratingCount: string,
  ratingLevel: string,
  addMyList: boolean
}

export type FilmProps = {
  film: Film;
};


export type FilmsProps = {
  films: Film[]
}

export type ReviewsProps = {
  reviews: Review[]
}
