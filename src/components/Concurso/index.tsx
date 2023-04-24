import styled from 'styled-components';
import { mega } from '../../styles/theme';

export default function Concurso({ numero, data }: any) {
  return (
    <Sld>
      Concurso {numero} - {data}
    </Sld>
  )
}

const Sld = styled.div`
  color: ${mega.data};
  font-size: 1rem;
  padding: 30px 0px;
  margin-left: 3.8rem;
  margin-top: -20px;
`;