import {useAppDispatch, useAppSelector} from "../../hooks";
import {AuthorizationStatus} from "../private-routes/private-route";
import {Link} from "react-router-dom";
import {logoutAction} from "../../store/api-actions";

function User(): JSX.Element {
  const {authorizationStatus, user} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <div className="user-block">
        <Link className="user-block__link" to={'/login'}>Sign in</Link>
      </div>
    );
  }
  return (
    <>
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >Sign out</Link>
        </li>
      </ul>
    </>
  )
}

export default User;
