import styled from 'styled-components'

export default function ValorAcumulado({valor, color}:any) {
  return (
    <ValorStyled color={color} >
        {valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    </ValorStyled>
  )
}

const ValorStyled = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
  padding-left: 73px;
  margin-top: 30px;
  font-size: 30px;
  margin-bottom: 30px;
`
