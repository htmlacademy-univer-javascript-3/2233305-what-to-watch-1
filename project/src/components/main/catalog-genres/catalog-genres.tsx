
function CatalogGenres(props: {genre: string}): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{props.genre}</a>
    </li>
  );
}

export default CatalogGenres;
