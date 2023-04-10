import Megasena from "./megasena/Megasena";
import { useContexto } from "../hooks";
import Lotofacil from "./lotofacil/Lotofacil";
import Loading from "./Loading";

export default function Principal() {
  const { megasena } = useContexto()
  // megasena.valorEstimadoProximoConcurso = 0
  return (
    <>
      {megasena.valorEstimadoProximoConcurso ?
        <>
          <Megasena />
          <Lotofacil />
        </>
        : <Loading />}
    </>
  )
}
