import styled from 'styled-components'

export default function Header({ logo, alt, name, color }: any) {
  return (
    <HeaderStyled>
      <img src={logo} alt={alt} />
      <TituloStyled>
        <NameStyled style={{ color: color }}>{name}</NameStyled>
      </TituloStyled>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: inline-block;
  padding: 30px;
  font-size: 1.5em;
  font-weight: bold;
  align-items: center;
  margin-right: 20px;
`

const TituloStyled = styled.div`
    display: inline-block;
    padding-top: 6px;
    font-size: 1.4em;
  `

const NameStyled = styled.span`
    padding:0;
    margin:7px;
`