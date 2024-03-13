import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SERVERURL = import.meta.env.VITE_SERVERURL;

const Login = () => {
    const [username, setUsername] = useState(localStorage.getItem("username") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");
    const [registerError, setRegisterError] = useState(false);
    const [message, setMessage] = useState("Enter Valid Details!");
    const [loading, setLoading] = useState(false); // Added loading state
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

        setLoading(true); // Set loading state to true when form is submitted

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
            setTimeout(() => {

                setRegisterError(false);
            }, 2000);
            // console.log(error.response.data);
        } finally {
            setLoading(false); // Set loading state to false when request is completed
        }
    };

    return (
        <div className="main flex mx-auto items-center justify-between h-screen flex-col bg-[#0c2c57e1]">
            <div className="flex mx-auto items-center justify-end md:justify-center h-screen flex-col">
                <div>
                    <h1 className='text-7xl p-4 font-bold text-[#FC6736]'>Travel</h1>
                    <h1 className='text-7xl ml-7 font-bold -mt-10 p-4 text-[#EFECEC]'>Smart</h1>
                </div>

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
                        className={`bg-[#FC6736] w-[150px] p-4 rounded-xl font-monospace text-white m-3 hover:bg-green-500 transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? 'Loading...' : 'Login'} {/* Display loading text when loading */}
                    </button>
                    <div className="mt-8 text-lg text-white">
                        Not our part yet?
                        <Link to="/register">
                            <div className=" inline text-xl text-[#FC6736] p-2 rounded-xl font-semibold"> Sign Up </div>
                        </Link>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Login;
