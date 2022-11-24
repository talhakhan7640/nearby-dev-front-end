import React, {useState} from 'react'
import './Register.css'
import {BsArrowReturnRight} from 'react-icons/bs'
import Navbar from '../components/Navbar'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Register = () => {
  const [inputOneHasFocus, setInputOneHasFocus] = useState(false);
  const [inputTwoHasFocus, setInputTwoHasFocus] = useState(false);
  return (
    <div className="register">
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="col-span-1"></div>
        <div className="main-home-section col-span-1">
          <h1 className="slogan text-white font-black text-5xl">
            A place where developers <br />
            meet to disscuss the future.
          </h1>
          <div className="form-section">
            <form action="" method="post" className="registration-form my-1">
              <div className="form-group">
                <MdOutlineKeyboardArrowRight className='terminal-arrow'
                  style={{
                    color: inputOneHasFocus? "#45f542" : "white"
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
                <MdOutlineKeyboardArrowRight className='terminal-arrow'
                style={{
                    color: inputTwoHasFocus? "#45f542" : "white"
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
                <div className="signup-button-container">
                  <button
                    type="submit"
                    className="signup-button bg-slate-400 px-3 py-2"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register