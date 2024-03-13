import React, { useState } from "react";
// import down from "../assets/down.png";
import { Link } from "react-router-dom";
import axios from "axios";

// const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8080/auth/login", {
//         teamCode,
//         password,
//       });

//       const token = response.data.data.token;
//       console.log("Login Successful! Token:", token);
//     } catch (error) {
//       console.error("Login Failed:", error.response?.data);
//     }
//   };

const Login = () => {

    const [registerError, setRegisterError] = useState(true);
    const [message, setMessage] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <div className="main flex mx-auto items-center justify-between h-screen flex-col bg-slate-100">
            <div className="flex mx-auto items-center justify-end md:justify-center h-screen flex-col">
                <h1 className="text-6xl mb-7 mainText font-bold uppercase text-red-700">fkjdkjfkd</h1>
                <form
                    className="flex flex-col justify-center items-center"
                //   onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="bg-black text-white p-5 rounded-xl m-3"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="border-green-500  text-white p-5 bg-black rounded-xl m-3"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-green-400 w-[150px] p-5 rounded-xl"
                    >
                        Login
                    </button>
                    <div className="mt-4">
                        Not our part yet ?
                        <Link to="/">
                            <div className=" inline text-red-700">Sign Up</div>
                        </Link>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Login;