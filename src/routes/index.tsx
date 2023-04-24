import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../pages/megasena/Megasena";
import Timemania from "../pages/timemania";
import Quina from "../pages/quina/Quina";
import Menu from "../components/Menu/Menu";
import Erro from "../pages/Erro";

export default function Rotas() {
  return (
    <BrowserRouter>
        <Menu />
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="/megasena" element={<Megasena />} />
            <Route path="/timemania" element={<Timemania />} />
            <Route path="/quina" element={<Quina />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </BrowserRouter>
  )
}
