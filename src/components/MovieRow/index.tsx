import { movieList } from "../../types";
import "./style.css";

export default function MovieRow({ title, items }: movieList) {
  return (
    <>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.length > 0 &&
          items.results.map(
            (items, key) => (
              <img
                key={key}
                src={`${process.env.REACT_APP_BASE_URL_IMAGE}w300${items.poster_path}`}
                alt={items.original_name}
              />
            ) //w300 seria o tamanho da imagem
          )}
      </div>
    </>
  );
}
