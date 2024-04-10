import ColorLogo from "../../assets/tinderLogo.png";
import WhiteLogo from "../../assets/tinderWhiteLogo.png";
import "./Navbar.css";

const Navbar = ({minimal, authToken}) => {

  

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? ColorLogo : WhiteLogo} alt="" />
      </div>

      {!authToken && !minimal && <button className="nav-btn">Log in</button>}
    </nav>
  )
}

export default Navbar
