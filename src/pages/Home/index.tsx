import { useEffect, useState } from "react";
import FeaturedMovie from "../../components/FeaturedMovie";
import Loading from "../../components/Loading";
import MovieRow from "../../components/MovieRow";
import { getHomeList, getMovieInfo } from "../../Services/Api";
import { movieList } from "../../types";
import "./style.css";

export default function Home() {
  const [movieList, setMovieList] = useState<movieList[]>();
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      setMovieList(list);

      let originais = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originais[0].items?.results.length - 1)
      );
      let chosen = originais[0].items.results[randomChosen];
      let chosenInfo = await getMovieInfo(chosen.id, "tv");
      setFeaturedMovie(chosenInfo);
    };
    loadAll();
  }, []);
  return (
    <>
      {movieList == null && <Loading />}
      {featuredMovie && <FeaturedMovie featuredMovie={featuredMovie} />}
      <section className="lists">
        {movieList?.map((item, key) => {
          return <MovieRow key={key} title={item.title} items={item.items} />;
        })}
      </section>
    </>
  );
}
