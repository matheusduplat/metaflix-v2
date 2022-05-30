import axios from "axios";

export const API_KEY = "97070d9fed21167d3fe183d0f5c9487b";
export const api = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

const basicFetch = async (endpoint: any) => {
  return api.get(`${endpoint}`).then((response) => {
    return response;
  });
};

export function getHomeList() {
  return [
    {
      slug: "originais",
      title: "Originais do Netflix",
      items: basicFetch(
        `discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: basicFetch(`trending/all/week?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: basicFetch(`movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: "action",
      title: "Ação",
      items: basicFetch(
        `discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comedia",
      items: basicFetch(
        `discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: basicFetch(
        `discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: basicFetch(
        `discover/movie?with_genres=1074&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentarios",
      items: basicFetch(
        `discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ];
}
