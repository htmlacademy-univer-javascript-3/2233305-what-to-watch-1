import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../../hooks";

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

type PrivateRouteProps = {
  children : JSX.Element;
}


function PrivateRoute(props: PrivateRouteProps):JSX.Element{
  const {authorizationStatus}= useAppSelector((state) => state);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to='/>login'/>
  );
}

export default PrivateRoute;
