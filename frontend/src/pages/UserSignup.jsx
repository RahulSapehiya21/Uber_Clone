import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from "../context/UserContext";



const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()  

  const { user, setUser } = React.useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname:Firstname,
        lastname:Lastname
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser )

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
    //  console.log(userData);
    
    setEmail('')
    setFirstname('')
    setLastname('')
    setPassword('')

    
  };


  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="img"
        />
        <form
          onSubmit={(e) => {
          submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-lg"
              type="text"
              placeholder="Firstname"
              value={Firstname}
              onChange={(e) => {
              setFirstname(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-lg"
              type="text"
              placeholder="Lastname"
              value={Lastname}
              onChange={(e) => {
              setLastname(e.target.value);
              }}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium  mb-2 ">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-lg"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-base placeholder:text-xm">
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600 ">
            Login here!
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
