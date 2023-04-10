import './index.css'

export default function DezenasMegasena({ dezenas }: any) {
    return (
        <div className='dezenas'>
            <ul>
                {dezenas.map((dezena:any, index:any) =>
                    <li className='dezenas' key={index}>
                        {dezena}
                    </li>)}
            </ul>
        </div>
    )
}