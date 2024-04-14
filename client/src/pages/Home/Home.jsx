import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import AuthModal from "../../components/AuthModal/AuthModal";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);


  const authToken = false;
  const handleClick = () => {
    console.log("Clicked");
    setShowModal(true)
    setIsSignUp(true)
  }
  return (
    <div className="overlay">
        <Navbar
            minimal={false}
            setShowModal={setShowModal}
            showModal={showModal}
            setIsSignUp={setIsSignUp}
        />
        <div className="home">
            <h1 className="primary-title">swipe> right</h1>
            <p className="tag-line">ON YOUR NEXT DEV PARNTER</p>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}
            </button>
            {showModal && (
                <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
            )}
        </div>
    </div>
)
}
export default Home