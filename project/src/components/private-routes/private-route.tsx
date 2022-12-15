import {Navigate} from 'react-router-dom';
import {useAppSelector} from "../../hooks";
import {getAuthorizationStatus} from "../../store/user-process/selectors";
import {AuthorizationStatus} from "../../const";

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
