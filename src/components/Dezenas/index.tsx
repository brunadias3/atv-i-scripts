import './index.css'

export default function DezenasMegasena({ dezenas, color }: any) {
    return (
        <div className='dezenas'>
            <ul>
                {dezenas.map((dezena:any, index:any) =>
                    <li style={{backgroundColor:color}} className='dezenas' key={index}>
                        {dezena}
                    </li>)}
            </ul>
        </div>
    )
}