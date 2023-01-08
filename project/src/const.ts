export enum NameSpace {
  Films = 'FILMS',
  Film = 'FILM',
  Review = 'REVIEW',
  User = 'USER',
  FavoriteFilms = 'FAVORITE',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Default = '/',
  Login = '/login',
  Logout = '/logout',
  Films = '/films',
  Similar = '/similar',
  Comments = '/comments',
  Favorite = '/favorite',
  Promo = '/promo',
  NotFound = '/notFound',
  Review = '/review',
  Player = '/player',
  MyList = '/mylist',
  Film = '/film',
}


export const INITIAL_STATE_GENRE = 'All genres';
export const INITIAL_STATE_FILM_COUNT = 8;
export const INITIAL_STATE_FILM_RATING_STARS = 8;
export const MIN_REVIEW_TEXT_LENGTH = 50;
export const MAX_REVIEW_TEXT_LENGTH = 50;
export const MAX_STARS_COUNT = 10;
export const SIMILAR_FILMS_COUNT = 4;
export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
