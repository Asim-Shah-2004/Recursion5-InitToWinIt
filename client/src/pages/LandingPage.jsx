import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const images = [pic1, pic2, pic3, pic4, pic5];

    return (
        <>
            <div className='w-full h-screen bg-[#0c2c57e1] mx-auto relative overflow-hidden'>
                <div className='max-w-[1440px] mx-auto flex justify-between'>
                    <div>
                        <h1 className='text-5xl p-4 font-bold text-[#FC6736]'>Travel</h1>
                        <h1 className='text-5xl ml-7 font-bold -mt-10 p-4 text-[#EFECEC]'>Smart</h1>
                    </div>
                    {/* <div className='z-10 p-8  relative -left-64 bg-black w-[500px]'>
                        <button className="overflow-hidden text-[#ffffff] px-10 rounded-xl font-bold text-2xl hover:bg-[#FC6736] hover:text-[#0C2D57] transition duration-300 ease-in-out">
                            <span className="absolute top-0 left-0 w-full h-full bg-[#FC6736] mix-blend-multiply transition-transform duration-300 ease-in-out transform scale-0 origin-top-left"></span>
                            <span className="px-10 py-4 block">Login</span>
                        </button>
        

                    </div> */}
                    

                </div>
                <div className='w-full max-w-[1400px] ml-24 mt-32 '>
                    <div className='text-6xl inline text-[#EFECEC] font-sans'>We make  </div>
                    <ReactTyped strings={["tailored itinerary", "budget analysis ", "security considerations", "clothing suggestions", "food attractions"]} typeSpeed={70} backSpeed={50} loop className='text-6xl text-[#FC6736] font-sans ' />
                    <div className='text-6xl text-[#EFECEC] font-sans'>available for your next trip  </div>
                    <div className='z-10 mt-9  '>
                        
                        
                        <div href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#000000] transition-all duration-150 ease-in-out rounded-xl hover:pl-10 hover:pr-6 bg-gray-50 group cursor-pointer p-5">
                            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#FC6736] group-hover:h-full"></span>
                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg class="w-5 h-5 text-[#0C2D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg class="w-5 h-5 text-[#0C2D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white p-2">Get Started</span>
                        </div>
                    </div>
                </div>
                <img
                    src={images[currentImageIndex]}
                    alt=""
                    className='sideImage fixed -z-1 select-none'
                />
            </div>
        </>
    );
};

export default LandingPage;
