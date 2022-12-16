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

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
