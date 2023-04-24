import logo from '../../assets/trevo-timemania.png'
import Linha from '../../components/Linha/Linha';
import useContexto from '../../hooks/useContexto';
import Header from '../../components/Header';
import DezenasMegasena from '../../components/Dezenas';
import Descricao from '../../components/Descricao';
import ValorAcumulado from '../../components/ValorAcumulado';
import Concurso from '../../components/Concurso';
import Ganhadores from '../../components/Ganhadores';
import styled from 'styled-components';
import { timemaniaSld } from '../../styles/theme';

export default function Timemania() {

  const { timemania } = useContexto()

  return (
    <>
      <Wrapper>

        <LadoEsquerdo>
          <Header logo={logo} alt='logo da timemania' name='Timemania' color={timemaniaSld.loteria} />
          <Descricao dataProximoConcurso={timemania.dataProximoConcurso} />
          <ValorAcumulado valor={timemania.valorEstimadoProximoConcurso} color={timemaniaSld.loteria} />
        </LadoEsquerdo>

        <LadoDireito>
          <DezenasMegasena dezenas={timemania.dezenas} color={timemaniaSld.bolafonte} background={timemaniaSld.bola} />
          <Ganhadores quantidadeGanhadores={timemania.quantidadeGanhadores} /> 
          <Concurso numero={timemania.numeroDoConcurso} data={timemania.dataPorExtenso} />
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
