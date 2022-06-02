import { movieList } from "../../types";
import "./style.css";

export default function MovieRow({ title, items }: movieList) {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map(
              (items, key) => (
                <div key={key} className="movieRow--item">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL_IMAGE}w300${items.poster_path}`}
                    alt={items.original_name}
                  />
                </div>
              ) //w300 seria o tamanho da imagem
            )}
        </div>
      </div>
    </div>
  );
}
