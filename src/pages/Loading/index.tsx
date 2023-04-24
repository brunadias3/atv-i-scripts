import styled from 'styled-components'

export default function Loading() {
    return (
        <Carregando>
            <span>Carregando...</span>
        </Carregando>
    )
}

const Carregando = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`