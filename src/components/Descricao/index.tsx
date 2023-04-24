import styled from "styled-components"
import { mega } from "../../styles/theme"

export default function Descricao({ dataProximoConcurso }: any) {
  return (
    <Sld>
      Estimativa de prêmio do próximo concurso. Sorteio em {dataProximoConcurso}:
    </Sld>
  )
}

const Sld = styled.div`
  color: ${mega.data};
  padding-left: 65px;
  width: 300px;
  font-size: 17px;
  margin: 25px 10px;
`