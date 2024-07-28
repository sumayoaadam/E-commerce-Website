import React from 'react'
import "./Css/LogingSingUp.css"

const LogingSingUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        {/* Sign up form */}
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='your name' />
          <input type="Email" name="" id="" placeholder='Email Adress' />
          <input type="password" placeholder='password' />

        </div>
           <button>Continue</button>
           <p className='loginsignup-login'>Already have account ? <span>Loging Here</span> </p>
           <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing i agree to the term of use & privacy policy</p>
           </div>
      </div>
      
    </div>
  )
}

export default LogingSingUp
