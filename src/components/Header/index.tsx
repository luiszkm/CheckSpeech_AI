import { Link } from "react-router-dom";
import { Container } from "./styled";



export function Header (){


  return(
    <Container>
      <nav>
        <Link to=""><img src="" alt="Logo " /></Link>
        <ul>
          <li><Link to = ''>Home</Link></li>
          <li><Link to = ''>Soluções</Link></li>
          <li><Link to = ''>Clientes</Link></li>
          <li><Link to = ''>Preços</Link></li>
          <li><Link to = ''>Contato</Link></li>
        </ul>
      </nav>
    </Container>
  )
}