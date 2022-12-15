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
import {getLoadedDataStatus} from "../../store/films-data/selectors";
import {getAuthorizationStatus} from "../../store/user-process/selectors";
import {AuthorizationStatus} from "../../const";


function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus)
  if (authorizationStatus === AuthorizationStatus.Unknown ||isDataLoaded) {
    return (
      <Spinner/>
    );
  }
  return (
      <Routes>
        <Route index element={<MainScreen/>}/>
        <Route path='/login' element={<SignInScreen/>}/>
        <Route path='/films/:id' element={<MoviePageScreen/>}/>
        <Route path='/films/:id/review' element={<AddReviewScreen/>}/>
        <Route path='/player/:id' element={<PlayerScreen/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route
          path='/mylist'
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
