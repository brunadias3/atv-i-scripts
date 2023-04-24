import logo from '../../assets/trevo-megasena.png'
import styled from 'styled-components';
import Linha from '../../components/Linha/Linha';
import useContexto from '../../hooks/useContexto';
import Header from '../../components/Header';
import DezenasMegasena from '../../components/Dezenas';
import Descricao from '../../components/Descricao';
import ValorAcumulado from '../../components/ValorAcumulado';
import Concurso from '../../components/Concurso';
import Ganhadores from '../../components/Ganhadores';
import {mega} from '../../styles/theme'

export default function Megasena() {

  const { megasena } = useContexto()

  return (
    <>
      <Wrapper>

        <LadoEsquerdo>
          <Header logo={logo} alt='logo da megasena' name='MEGA-SENA' color={mega.loteria} />
          <Descricao dataProximoConcurso={megasena.dataProximoConcurso} />
          <ValorAcumulado valor={megasena.valorEstimadoProximoConcurso} color={mega.loteria} />
        </LadoEsquerdo>

        <LadoDireito>
          <DezenasMegasena dezenas={megasena.dezenas} color='#fff' background={mega.loteria} />
          <Ganhadores quantidadeGanhadores={megasena.quantidadeGanhadores} /> 
          <Concurso numero={megasena.numeroDoConcurso} data={megasena.dataPorExtenso} />
        </LadoDireito>

      </Wrapper>
      
      <Linha />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
`
const LadoEsquerdo = styled.div``

const LadoDireito = styled.div`
  margin-left: 50px;
`