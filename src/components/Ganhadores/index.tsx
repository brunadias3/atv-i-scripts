import styled from 'styled-components';
import { mega } from '../../styles/theme'

export default function Ganhadores({ quantidadeGanhadores }: any) {
  return (
    <Sld>{quantidadeGanhadores===0?'ACUMULOU!': quantidadeGanhadores===1? `${quantidadeGanhadores} GANHADOR` : `${quantidadeGanhadores} GANHADORES`}</Sld>
  )
}

const Sld = styled.h1`
    color: ${mega.acumulou};
    font-size: 2rem;
    padding: 27px 0px;
    margin-left: 3.8rem;
`