import './index.css'

export default function DezenaLoto({ dezenas }: any) {
    return (
        <div className='coluna-dezenas-loto'>
            <ul>
                {dezenas.map((dezena: any, index: any) =>
                    <li key={index}>{dezena}</li>)}
            </ul>
        </div>
    )
}
