import './index.css'

export default function ValorAcumulado({valor, color}:any) {
  return (
    <div className='valor' style={{color:color}}>
        {valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    </div>
  )
}
