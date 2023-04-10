import './index.css'

export default function Ganhadores({ quantidadeGanhadores }: any) {
  return (
    <h1 className='acumulado'>{quantidadeGanhadores===0?'ACUMULOU!': quantidadeGanhadores===1? `${quantidadeGanhadores} GANHADOR` : `${quantidadeGanhadores} GANHADORES`}</h1>
  )
}
