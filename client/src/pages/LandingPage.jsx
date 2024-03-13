// import React from 'react';
import { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import { Link } from 'react-router-dom';
import StyledButton from '@/components/ui/StyledButton';
import '../App.css';

const TEXTLIST = ["tailored itinerary", "budget analysis ", "security considerations", "clothing suggestions", "food attractions"]

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
                </div>

                <div className='w-full max-w-[1400px] ml-24 mt-32 '>

                    <div className='text-6xl inline text-[#EFECEC] font-sans'>We make  </div>
                    <ReactTyped strings={TEXTLIST} typeSpeed={70} backSpeed={50} loop className='text-6xl text-[#FC6736] font-sans ' />
                    <div className='text-6xl text-[#EFECEC] font-sans'>available for your next trip  </div>

                    <div className='z-10 mt-9'>
                        <Link to="/login"> <StyledButton /> </Link>
                    </div>

                </div>
                <img src={images[currentImageIndex]} className='sideImage fixed -z-1 select-none' alt="" />
            </div>
        </>
    );
};

export default LandingPage;
