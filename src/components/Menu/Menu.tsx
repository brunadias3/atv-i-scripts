import { Link, useLocation } from "react-router-dom"
import './index.css'

export default function Menu() {
  // const location = useLocation().pathname;
  // console.log(location)
  return (
    <div className='menu' style={{backgroundColor:'yellow'}}>
      <span><Link to="/lotofacil">Lotofácil</Link></span>
      <span><Link to="/megasena">Megasena</Link></span>
      <span><Link to="/quina">Quina</Link></span>
    </div>
  )
}
