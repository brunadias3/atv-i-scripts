import Header from '../../components/Header'
import logo from '../../assets/trevo-lotofacil.png'
import Descricao from '../../components/Descricao'
import { useContexto } from '../../hooks'
import ValorAcumulado from '../../components/ValorAcumulado'
import DezenaLoto from '../../components/Dezenas/Lotofacil'
import Ganhadores from '../../components/Ganhadores'
import Concurso from '../../components/Concurso'

export default function Lotofacil() {
  const { lotofacil } = useContexto()

  console.log(lotofacil.dezenas)

  return (
    <div className='container'>
      <div className='coluna1'>
        <Header logo={logo} alt='logo da lotofacil' name='LOTOFÁCIL' color='#930089' />
        <Descricao dataProximoConcurso={lotofacil.dataProximoConcurso} />
        <ValorAcumulado valor={lotofacil.valorEstimadoProximoConcurso} color='#930089' />
      </div>
      <div className='coluna2'>
        <DezenaLoto dezenas={lotofacil.dezenas} />
        <Ganhadores quantidadeGanhadores={lotofacil.quantidadeGanhadores} />
        <Concurso numero={lotofacil.numeroDoConcurso} data={lotofacil.dataPorExtenso} />

      </div>
    </div>
  )
}
