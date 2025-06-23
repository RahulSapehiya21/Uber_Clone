import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const CaptainSignup = () => {

const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [vehicleColor, setvehicleColor] = useState('');
  const [vehiclePlate, setvehiclePlate] = useState('');
  const [vehicleCapacity, setvehicleCapacity] = useState('');
  const [vehicleType, setvehicleType] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext) 

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: Firstname,
        lastname: Lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };
    
      // console.log(userData);
 
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail("");
    setFirstname("");
    setLastname("");
    setPassword("");
    setvehicleColor("");
    setvehiclePlate("");
    setvehicleCapacity("");
    setvehicleType("");

    
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
            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-5">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-lg"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setvehicleColor(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-lg"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setvehiclePlate(e.target.value)}
            />
            </div>
            <div className="flex gap-4 mb-7">
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-lg"
              type="number"
              min="1"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setvehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg"
              value={vehicleType}
              onChange={(e) => setvehicleType(e.target.value)}
            >
              <option value="" disabled>
              Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
            </div>
          <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2 w-full text-base placeholder:text-xm">
            Create Captain account
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
