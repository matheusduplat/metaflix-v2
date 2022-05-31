import { useEffect, useState } from "react";
import MovieRow from "../../components/MovieRow";
import { getHomeList } from "../../Services/Api";
import { movieList } from "../../types";

export default function Home() {
  const [movieList, setMovieList] = useState<movieList[]>();

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);
  return (
    <>
      <section className="lists">
        {movieList?.map((item, key) => {
          return <MovieRow key={key} title={item.title} items={item.items} />;
        })}
      </section>
    </>
  );
}
