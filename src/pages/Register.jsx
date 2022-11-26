import React, {useState} from 'react'
import './Register.css'
import Navbar from '../components/Navbar'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import axios from "axios"

const Register = () => {
  const [inputOneHasFocus, setInputOneHasFocus] = useState(false);
  const [inputTwoHasFocus, setInputTwoHasFocus] = useState(false);

  //Handling form submission
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const url = "https://nearby-developer-auth-app.herokuapp.com/users/register";
    const configuration = {
      method: "POST",
      url: url,
      data: {
        email,
        password,
      }
    }

    axios(configuration)
      .then((result) => {
        setRegister(true)
      })
      .catch((error) => {
        error = new Error();
      })
  }

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
            <form action="" method="post" className="registration-form my-1" onSubmit={handleSubmit}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center  mt-3">
                <div>
                  {/* display success message */}
        {register ? (
          <p className="text-success text-white" style={{color: "#C8D1D8"}}>You Are Registered Successfully</p>
        ) : (
          <p className="text-danger text-white text-xs" style={{color: "#C8D1D8"}}>You Are Not Registered</p>
        )}
                </div>
                <div className="signup-button-container">
                  <button
                    type="submit"
                    className="signup-button bg-slate-400 px-3 py-2"
                    onClick={handleSubmit}
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