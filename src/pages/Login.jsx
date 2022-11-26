import React, {useState} from 'react'
import './Login.css'
import logo from '../images/logo.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Login = () => {
  const [inputOneHasFocus, setInputOneHasFocus] = useState(false);
  const [inputTwoHasFocus, setInputTwoHasFocus] = useState(false);
  return (
    <div className="login">
      <div className="container mx-auto">
        <div className="form-container mx-auto">
          <div className="logo mt-4">
            <img src={logo} alt="" srcset="" className="logo-image" />
          </div>
          <div className="mt-10 text-center">
            <h1 className="login-slogan text-white text-2xl">
              Sign in to Typo
            </h1>
          </div>
          <div className="login-form-section mx-auto">
            <form action="" method="post" className="registration-form my-1">
              <div className="form-group">
                <MdOutlineKeyboardArrowRight
                  className="terminal-arrow"
                  style={{
                    color: inputOneHasFocus ? "#45f542" : "white",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="px-2 pt-2 my-2"
                  onFocus={() => setInputOneHasFocus(true)}
                  onBlur={() => setInputOneHasFocus(false)}
                />
              </div>

              <div className="form-group">
                <MdOutlineKeyboardArrowRight
                  className="terminal-arrow"
                  style={{
                    color: inputTwoHasFocus ? "#45f542" : "white",
                  }}
                />
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  className="px-2 pt-2 my-2"
                  onFocus={() => setInputTwoHasFocus(true)}
                  onBlur={() => setInputTwoHasFocus(false)}
                />
              </div>

              <div className="flex justify-between mt-3">
                <div></div>
                <div className="forget-password-container">
                  Forget password?
                </div>
              </div>

              <div className=" mt-5">
                <div className="login-button-container">
                  <button
                    type="submit"
                    className="login-button bg-slate-400 px-3 py-2"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="signup-section text-white ">
         <p className="">New on Typo? <span className='signup-here'>Singup here</span>  </p> 
        </div>
      </div>
    </div>
  );
}

export default Login