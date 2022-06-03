import { BrowserRouter, Route as Rota, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function Route() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Rota element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
