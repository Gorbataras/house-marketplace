import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [showPassowrd, setShowPassword] = useState(false)
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form action="">
          <input type="email" className="emailInput" placeholder='Email' id='email' value={email} onChange={onChange} />

          <div className="passwordInputDiv">
            <input type={showPassowrd ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password' value={password} onChange={onChange} />

            <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword((prevState) => !prevState) } />
          </div>
          
          <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton"><ArrowRightIcon fill='white' width='34px'height='34px'/></button>
          </div>
        </form>

        <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>
      </div>
    </>
  )
}

export default SignIn