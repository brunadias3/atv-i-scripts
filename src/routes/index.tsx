import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../pages/megasena/Megasena";
import Lotofacil from "../pages/lotofacil/Lotofacil";
import Quina from "../pages/quina/Quina";
import Menu from "../components/Menu/Menu";

export default function Rotas() {
  return (
    <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/megasena" element={<Megasena />} />
            <Route path="/lotofacil" element={<Lotofacil />} />
            <Route path="/quina" element={<Quina />} />
            {/* <Route path="*" element={<Erro />} /> */}
          </Routes>
        </BrowserRouter>
  )
}
