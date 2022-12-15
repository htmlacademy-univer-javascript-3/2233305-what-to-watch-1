import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../../hooks";
import {getAuthorizationStatus} from "../../store/user-process/selectors";

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

type PrivateRouteProps = {
  children: JSX.Element;
}


function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to='/>login'/>
  );
}

export default PrivateRoute;
