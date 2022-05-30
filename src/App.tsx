import React, { useEffect } from "react";
import "./App.css";
import { getHomeList } from "./Services/Api";

export default function App() {
  useEffect(() => {
    const loadAll = () => {
      let list = getHomeList();
      console.log(list);
    };
    loadAll();
  }, []);
  return <div className="App"></div>;
}
