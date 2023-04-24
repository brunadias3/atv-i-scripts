import logo from '../../assets/trevo-quina.png'
import styled from 'styled-components';
import Linha from '../../components/Linha/Linha';
import useContexto from '../../hooks/useContexto';
import Header from '../../components/Header';
import DezenasMegasena from '../../components/Dezenas';
import Descricao from '../../components/Descricao';
import ValorAcumulado from '../../components/ValorAcumulado';
import Concurso from '../../components/Concurso';
import Ganhadores from '../../components/Ganhadores';
import { quinaSld } from '../../styles/theme';

export default function Quina() {

  const { quina } = useContexto()

  return (
    <>
      <Wrapper>

        <LadoEsquerdo>
          <Header logo={logo} alt='logo da quina' name='QUINA' color={quinaSld.loteria} />
          <Descricao dataProximoConcurso={quina.dataProximoConcurso} />
          <ValorAcumulado valor={quina.valorEstimadoProximoConcurso} color={quinaSld.loteria} />
        </LadoEsquerdo>

        <LadoDireito>
          <DezenasMegasena dezenas={quina.dezenas} color='#FFF' background={quinaSld.loteria} />
          <Ganhadores quantidadeGanhadores={quina.quantidadeGanhadores} /> 
          <Concurso numero={quina.numeroDoConcurso} data={quina.dataPorExtenso} />
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