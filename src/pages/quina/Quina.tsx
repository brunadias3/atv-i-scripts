import logo from '../../assets/trevo-quina.png'
import './quina.css'
import Linha from '../../components/Linha/Linha';
import useContexto from '../../hooks/useContexto';
import Header from '../../components/Header';
import DezenasMegasena from '../../components/Dezenas/MegaSena';
import Descricao from '../../components/Descricao';
import ValorAcumulado from '../../components/ValorAcumulado';
import Concurso from '../../components/Concurso';
import Ganhadores from '../../components/Ganhadores';
export default function Quina() {

  const { quina } = useContexto()

  return (
    <>
      <div className='container'>
        <div className='coluna1'>
          <Header logo={logo} alt='logo da quina' name='QUINA' color='#260085' />
          <Descricao dataProximoConcurso={quina.dataProximoConcurso} />
          <ValorAcumulado valor={quina.valorEstimadoProximoConcurso} color='#260085' />
        </div>
        <div className='coluna2'>
          <DezenasMegasena dezenas={quina.dezenas} color='#260085' />
          <Ganhadores quantidadeGanhadores={quina.quantidadeGanhadores} /> 
          <Concurso numero={quina.numeroDoConcurso} data={quina.dataPorExtenso} />
        </div>
      </div>
      <Linha />
    </>
  )
}
