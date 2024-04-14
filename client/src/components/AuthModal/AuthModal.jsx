import { useState } from 'react'
import "./AuthModal.css";

const AuthModal = ({ setShowModal, isSignUp}) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)


  console.log(email, password, confirmPassword)
// const isSignUp = true;
  const handleClick = () => {
      setShowModal(false)
  }

  const handleSubmit = async (e) => {
      e.preventDefault()

      try {
          if (isSignUp && (password !== confirmPassword)) {
              setError('Passwords need to match!')
          }
          console.log("take post req to our db")
      } catch (error) {
          console.log(error)
      }

  }

  return (
      <div className="auth-modal">
          <div className="close-icon" onClick={handleClick}>ⓧ</div>

          <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
          <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
          <form onSubmit={handleSubmit}>
              <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
              />
              {isSignUp && <input
                  type="password"
                  id="password-check"
                  name="password-check"
                  placeholder="Confirm Password"
                  required={true}
                  onChange={(e) => setConfirmPassword(e.target.value)}
              />}
              <input className="secondary-button" type="submit"/>
              <p>{error}</p>
          </form>

          {/* <hr/> */}
          {/* <h2>GET THE APP</h2> */}

      </div>
  )
}
export default AuthModal