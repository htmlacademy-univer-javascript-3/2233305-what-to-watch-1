import {Link} from "react-router-dom";
import {APIRoute} from "../../const";

function Logo(): JSX.Element {
  return (
    <div className="logo">
      <Link to={APIRoute.Default} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
