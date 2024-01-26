import { Link } from "react-router-dom";
import "./styleComp.css"

export default function Header() {
  return(


<nav className="head">
  <div className="">
    <Link to="/"><img src="src/assets/logo.png" className="ml-3" width="60%"/></Link>
  </div>
  <div className="filtro">
    <a href="visualizar" className="texto">Eventos</a>
    <a href="registrar" className="texto">Registrar</a>
    <a href="comprar" className="texto">Comprar</a>
  </div>
  <div>
    <Link to="/login"><button className="mr-4 botaoNav">Login</button></Link>
  </div>

</nav>
  )
}