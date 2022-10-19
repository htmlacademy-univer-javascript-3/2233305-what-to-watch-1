import MainScreen from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute, {AuthorizationStatus} from '../private-routes/private-route';
import {FilmsProps} from '../../types/types';
import {myListFilms, myListFilmsCount} from '../../mocks/const';

function App({films}: FilmsProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen films={films} previewFilm={films[0]} myListFilmsCount={myListFilmsCount}/>}/>
        <Route path='/login' element={<SignInScreen/>}/>
        <Route path='/films/:id' element={<MoviePageScreen/>}/>
        <Route path='/films/:id/review' element={<AddReviewScreen film={films[0]}/>}/>
        <Route path='/player/:id' element={<PlayerScreen films={films}/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route
          path='/mylist'
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListScreen films={myListFilms}/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
