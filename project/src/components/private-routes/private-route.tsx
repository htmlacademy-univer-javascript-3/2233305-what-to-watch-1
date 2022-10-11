import {Navigate} from 'react-router-dom';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

type PrivateRouteProps = {
  authorizationStatus : AuthorizationStatus;
  children : JSX.Element;
}

function PrivateRoute(props : PrivateRouteProps):JSX.Element{
  return (
    props.authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to='/>login'/>
  );
}

export default PrivateRoute;
