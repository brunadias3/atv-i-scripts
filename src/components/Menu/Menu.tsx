import { Link, useLocation } from "react-router-dom"
import './index.css'

export default function Menu() {
  const location = useLocation().pathname;

  return (
    <div className='menu'>
      <span>
        <Link to="/lotofacil" className={location === "/lotofacil" ? "isActive" : "corLoto"}>
          Lotofácil
        </Link>
      </span>
      <span>
        <Link to="/megasena" className={location === "/megasena" ? "isActive" : "corMega"}>
          Megasena
        </Link>
      </span>
      <span>
        <Link to="/quina" className={location === "/quina" ? "isActive" : "corQuina"}>
          Quina
        </Link>
      </span>
    </div>
  )
}
