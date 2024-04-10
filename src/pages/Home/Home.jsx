import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {

  const authToken = false;
  const handleClick = () => {
    console.log("Clicked");
  }
  return (
    <div className="overlay">
    <Navbar minimal={false} authToken={authToken}/>
    <div className="home">
      <h1>Swipe Right</h1>
      <button className="primary-button" onClick={handleClick}>
        {authToken ? 'Signout' : 'Create Account'}
      </button>
    </div>
    </div>
  )
}

export default Home
