import { useContexto } from "../hooks";
import Loading from "./Loading";
import Rotas from "../routes";

export default function Principal() {
  const { megasena } = useContexto()
  // megasena.valorEstimadoProximoConcurso = 0
  return (
    <>
      {megasena.valorEstimadoProximoConcurso ?
        <>
          <Rotas />
        </>
        : <Loading />}
    </>
  )
}
