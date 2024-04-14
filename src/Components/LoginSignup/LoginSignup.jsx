import './LoginSignup.css'
import email_icon from '../assets/email.png'
import person_icon from '../assets/person.png'
import password_icon from '../assets/password.png'
import { useState } from 'react'

const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {
                action==="Login"?<div></div>:<div className="input">
                <img src={person_icon} alt="" />
                <input type="text"  placeholder='Name'/>
            </div>
            }
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {
            action==="Login"?<div className="forgot-password">Lost password?<span>Click here!</span></div>:<div></div>
        }
        
        <div className="submit-container">
            <div className={action==="Sign Up"?"submit":"submit gray"} onClick={()=>{
                setAction("Sign Up")
            }}>Sign Up</div>
            <div className={action==="Login"?"submit":"submit gray"} onClick={()=>{
                setAction("Login")
            }}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup