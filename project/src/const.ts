export enum NameSpace {
  Data = 'DATA',
  Films = 'FILMS',
  User = 'USER',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Questions = '/questions',
  Login = '/login',
  Logout = '/logout',
}


export const INITIAL_STATE_GENRE = 'All genres';
export const INITIAL_STATE_FILM_COUNT = 8;

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
