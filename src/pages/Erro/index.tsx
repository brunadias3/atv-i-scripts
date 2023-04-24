import styled from 'styled-components';

export default function Erro() {
  return (
    <ErroStyled>Página não encontrada</ErroStyled>
  )
}

const ErroStyled = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`