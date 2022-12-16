import MainScreen from '../../pages/main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-routes/private-route';
import Spinner from "../spinner/spinner";
import {useAppSelector} from "../../hooks";
import {getLoadedDataStatusFilms} from "../../store/films-process/selectors";
import {getAuthorizationStatus} from "../../store/user-process/selectors";
import {APIRoute, AuthorizationStatus} from "../../const";
import {getLoadedDataStatusFilm} from "../../store/film-process/selector";


function App(): JSX.Element {
  const isDataLoadedFilm = useAppSelector(getLoadedDataStatusFilm);
  const isDataLoadedFilms = useAppSelector(getLoadedDataStatusFilms)
  const authorizationStatus = useAppSelector(getAuthorizationStatus)
  console.log(isDataLoadedFilm, isDataLoadedFilms)
  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoadedFilms) {
    return (
      <Spinner/>
    );
  }
  return (
      <Routes>
        <Route index element={<MainScreen/>}/>
        <Route path={APIRoute.Login} element={<SignInScreen/>}/>
        <Route path={`${APIRoute.Films}/:id`} element={<MoviePageScreen/>}/>
        <Route path={`${APIRoute.Films}/:id${APIRoute.Review}`} element={<AddReviewScreen/>}/>
        <Route path={`${APIRoute.Player}/:id`} element={<PlayerScreen/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route
          path={APIRoute.MyList}
          element={
            <PrivateRoute>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
      </Routes>
  );
}

export default App;
