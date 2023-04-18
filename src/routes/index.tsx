import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../pages/megasena/Megasena";
import Lotofacil from "../pages/lotofacil/Lotofacil";
import Quina from "../pages/quina/Quina";
import Menu from "../components/Menu/Menu";
import Erro from "../pages/Erro";
import Loading from "../pages/Loading";

export default function Rotas({currentPage}:any) {
  return (
    <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/megasena" element={<Megasena />} />
            <Route path="/lotofacil" element={<Lotofacil />} />
            <Route path="/quina" element={<Quina />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </BrowserRouter>
  )
}
