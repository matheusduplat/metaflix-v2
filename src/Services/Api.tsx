import axios from "axios";
import { items } from "../types";

export const API_KEY = "97070d9fed21167d3fe183d0f5c9487b";
export const api = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

const basicFetch = async (endpoint: any) => {
  return await api.get(`${endpoint}`).then((response) => {
    const data = response.data as items;
    return data;
  });
};

export const getHomeList = async () => {
  return [
    {
      slug: "originais",
      title: "Originais do Netflix",
      items: await basicFetch(
        `discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: await basicFetch(
        `trending/all/week?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: await basicFetch(
        `movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(
        `discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comedia",
      items: await basicFetch(
        `discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(
        `discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `discover/movie?with_genres=1074&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentarios",
      items: await basicFetch(
        `discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ];
};
