import {useAppDispatch, useAppSelector} from "../../hooks";
import {Link} from "react-router-dom";
import {logoutAction} from "../../store/api-actions";
import {getAuthorizationStatus, getUser} from "../../store/user-process/selectors";
import {AuthorizationStatus} from "../../const";

function User(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();
  if (authorizationStatus === AuthorizationStatus.NoAuth || user === undefined) {
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
            <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
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
