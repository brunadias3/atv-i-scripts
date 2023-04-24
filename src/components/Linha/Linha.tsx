import styled from "styled-components"

export default function Linha() {
  return (
    <LinhaStyled/>
  )
}

const LinhaStyled = styled.div`
    display: flex;
    border-bottom: 1px solid #bbb;
    align-items: flex-end;
    padding: 10px 0px;
`