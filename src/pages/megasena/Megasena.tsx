import logo from '../../assets/trevo-megasena.png'
import './megasena.css'
import Linha from '../../components/Linha/Linha';
import useContexto from '../../hooks/useContexto';
import Header from '../../components/Header';
import DezenasMegasena from '../../components/Dezenas/MegaSena';
import Descricao from '../../components/Descricao';
import ValorAcumulado from '../../components/ValorAcumulado';
import Concurso from '../../components/Concurso';
import Ganhadores from '../../components/Ganhadores';
export default function Megasena() {

  const { megasena } = useContexto()

  return (
    <>
      <div className='container'>
        <div className='coluna1'>
          <Header logo={logo} alt='logo da megasena' name='MEGA-SENA' color='#209869' />
          <Descricao dataProximoConcurso={megasena.dataProximoConcurso} />
          <ValorAcumulado valor={megasena.valorEstimadoProximoConcurso} color='#209869' />
        </div>
        <div className='coluna2'>
          <DezenasMegasena dezenas={megasena.dezenas} color='#209869' />
          <Ganhadores quantidadeGanhadores={megasena.quantidadeGanhadores} /> 
          <Concurso numero={megasena.numeroDoConcurso} data={megasena.dataPorExtenso} />
        </div>
      </div>
      <Linha />
    </>
  )
}
