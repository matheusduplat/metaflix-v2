import { movieList } from "../../types";
import "./style.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
export default function MovieRow({ title, items }: movieList) {
  const [scrollx, setScrollx] = useState(0);
  const listW = items.results.length * 150;

  const handleLeftArrow = () => {
    let valueScrollx = scrollx + Math.round(window.innerWidth / 2);
    if (valueScrollx > 0) {
      valueScrollx = 0;
    }
    setScrollx(valueScrollx);
  };

  const handleRighttArrow = () => {
    let valueScrollx = scrollx - Math.round(window.innerWidth / 2);
    if (window.innerWidth - listW > valueScrollx) {
      valueScrollx = window.innerWidth - listW - 60;
    }
    setScrollx(valueScrollx);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRighttArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrollx, width: listW }}
        >
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
