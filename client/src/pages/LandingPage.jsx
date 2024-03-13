import React, { useState, useEffect } from 'react';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import '../App.css';

const LandingPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the current image index, looping back to 0 when reaching the last image
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 2000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures that the effect runs only once on component mount

    const images = [pic1, pic2, pic3, pic4, pic5];

    return (
        <>
            <div className='w-full h-screen bg-[#0C2D57] mx-auto'>
                <div className='max-w-[1440px] mx-auto flex justify-between'>
                    <div>
                        <h1 className='text-5xl p-4 font-bold  text-[#FC6736]'>Travel</h1>
                        <h1 className='text-5xl ml-7 font-bold -mt-10 p-4 text-[#EFECEC]'>Smart</h1>
                    </div>
                    <div className='z-10 '>Start Planning</div>
                </div>
                <img src={images[currentImageIndex]} alt="" className='sideImage fixed -z-1' />
            </div>
        </>
    );
};

export default LandingPage;
