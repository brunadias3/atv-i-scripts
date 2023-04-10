import './index.css'

export default function Descricao({ dataProximoConcurso }: any) {
  return (
    <div className='descricao'>
      Estimativa de prêmio do próximo concurso. Sorteio em {dataProximoConcurso}:
    </div>
  )
}