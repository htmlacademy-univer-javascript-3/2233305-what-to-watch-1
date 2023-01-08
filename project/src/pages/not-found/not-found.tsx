import {Link} from 'react-router-dom';
import {APIRoute} from '../../const';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404.
        <br/>
        <small>Page not found</small>
      </h1>
      <Link to={APIRoute.Default}>Go to main page </Link>
    </>
  );
}

export default NotFound;
