import { BrowserRouter, Route as Rota, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function Route() {
  return (
    <BrowserRouter>
      <Routes>
        <Rota element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
