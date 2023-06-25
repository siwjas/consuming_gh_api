import { Link } from "react-router-dom"
import { Wrapper } from "../wrapper";
import { NavLink } from "./styles";

function NotFound() {
  return (
    <Wrapper>
      <h2>Oops! Parece que vocês está perdido.</h2>
      <p><strong>Aqui estão alguns links que podem lhe ajudar:</strong></p>

      <NavLink>
        <Link to="/" className='nav-link'>Home</Link>
      </NavLink>      
    </Wrapper>    
  );
}

export default NotFound