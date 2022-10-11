import MainScreen from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute, {AuthorizationStatus} from '../private-routes/private-route';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
}

function App({ title, genre, year }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen title={title} genre={genre} year={year} />}/>
        <Route path='/login' element={<SignInScreen/>}/>
        <Route path='/films/:id' element={<MoviePageScreen/>}/>
        <Route path='/films/:id/review' element={<AddReviewScreen/>}/>
        <Route path='/player/:id' element={<PlayerScreen/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route
          path='/mylist'
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
