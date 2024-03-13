// import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SERVERURL = import.meta.env.VITE_SERVERURL;

const Login = () => {
    const [username, setUsername] = useState(localStorage.getItem("username") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");
    const [registerError, setRegisterError] = useState(false);
    const [message, setMessage] = useState("Enter Valid Details!");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await axios.post(`${SERVERURL}/login`, { username: username, password: password, });
                if (response.data.user === username)
                    navigate('/dashboard');
            } catch (error) {
                console.error('Login failed:', error);
            }
        };

        checkLogin();
    }, [])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${SERVERURL}/login`, formData);
            if (response.data.user === formData.username) {
                localStorage.clear();
                localStorage.setItem("username", response.data.user);
                localStorage.setItem("password", response.data.password);

                navigate('/dashboard');
            }
            else
                navigate('/');
        } catch (err) {
            console.error("Error login:", err);
            setRegisterError(true);
            setMessage(err.response.data.message);
            // console.log(error.response.data);
        }
    };

    return (
        <div className="main flex mx-auto items-center justify-between h-screen flex-col bg-slate-100">
            <div className="flex mx-auto items-center justify-end md:justify-center h-screen flex-col">
                <h1 className="text-6xl mb-7 mainText font-bold uppercase text-red-700">fkjdkjfkd</h1>

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
                        type="username"
                        name="username"
                        placeholder="Enter your username"
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
                        Not our part yet?
                        <Link to="/register">
                            <div className=" inline text-red-700"> Sign Up </div>
                        </Link>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Login;