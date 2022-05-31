import { useEffect, useState } from "react";
import { getHomeList } from "../../Services/Api";

export default function Home() {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    const loadAll = async () => {
      let list = await getHomeList();
      console.log(list);
    };
    loadAll();
  }, []);
  return <div></div>;
}
