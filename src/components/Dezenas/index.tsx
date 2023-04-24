import styled from 'styled-components'

export default function DezenasMegasena({ dezenas, color, background }: any) {
    return (
        <DezenaStyle>
            <ul>
                {dezenas.map((dezena:any, index:any) =>
                    <LiStyle key={index} color={color} background={background}>
                        {dezena}
                    </LiStyle>)}
            </ul>
        </DezenaStyle>
    )
}

interface Props {
    color: string;
    background: string;
};

const DezenaStyle = styled.div`
    margin-top: 50px;
`

const LiStyle = styled.li<Props>`
    position: flex;
    margin: 1rem;
    font-weight: bold;
    display: inline;
    border-radius: 30px;
    padding: 0.8rem;
    font-size: 1.2rem;
    color: ${(props) => props.color};
    background-color: ${(props) => props.background};
`