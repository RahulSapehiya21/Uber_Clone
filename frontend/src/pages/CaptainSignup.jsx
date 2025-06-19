import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        Firstname: Firstname,
        Lastname: Lastname,
      },
      email: email,
      password: password,
    });
    
      // console.log(userData);
 
    setEmail("");
    setFirstname("");
    setLastname("");
    setPassword("");
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="img"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's our captain name</h3>
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
          <h3 className="text-lg font-medium mb-2">What's our captain email</h3>
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
            Login
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600 ">
            Login here!
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
