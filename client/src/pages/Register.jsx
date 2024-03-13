// import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import { Button } from "@/components/ui/button";

const SERVERURL = import.meta.env.VITE_SERVERURL;

const Register = () => {
  const [registerError, setRegisterError] = useState(false);
  const [message, setMessage] = useState("User already present! Please Login!");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${SERVERURL}/register`, formData);
      if (response.data.user === formData.username) {
        localStorage.clear();
        localStorage.setItem("username", response.data.user);
        localStorage.setItem("password", response.data.password);
        navigate('/dashboard');
      }
      else
        setMessage(response.data.message);
    }
    catch (err) {
      console.error("Error registering user:", err.response?.data.message);
      setRegisterError(true);
      setMessage(err.response.data.message)
    }
  };

  return (
    <div className="main flex mx-auto items-center justify-between h-screen flex-col bg-slate-600">
      <div className="flex mx-auto items-center justify-end md:justify-center h-screen flex-col">
        <h1 className="text-6xl mb-7 mainText font-bold uppercase text-red-400">Register</h1>
        {registerError && (
          <p className="text-white bg-red-500 p-3 m-3 rounded-full">
            {message}
          </p>
        )}
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter username"
            className="bg-black text-white p-5 rounded-xl m-3"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border-green-500 p-5 bg-black text-white rounded-xl m-3"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-green-400 w-[150px] p-5 rounded-xl"
          >
            Register
          </button>
          <div className="mt-4">
            Have an account already ?
            <Link to="/login" className="ml-2 text-green-400"> Login </Link>
          </div>

        </form>
        {/* <Button>Hello from shadcn</Button> */}
      </div>

      {/* <img src={down} alt="" className="w-full md:hidden" /> */}
    </div>
  );
};

export default Register;