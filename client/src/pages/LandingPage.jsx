import React from 'react'
import pic from '../assets/eiffel.jpg'
import '../App.css'

const LandingPage = () => {
    return (
        <>
            <div className='w-full h-screen bg-[#0c2c57e1] mx-auto'>
                <div className='max-w-[1440px] mx-auto flex justify-between'>
                    <div >

                        <h1 className='text-5xl p-4 font-bold  text-[#FC6736]'>Travel</h1>
                        <h1 className='text-5xl ml-7 font-bold -mt-10 p-4 text-[#EFECEC]'>Smart</h1>

                    </div>
                    <div className='z-10 p-8  relative -left-64'>
                        <button className='border-[2px] border-[#EFECEC] border-solid text-[#EFECEC] p-4 mr-5 rounded-xl hover:text-[#]'>Start Planning</button>
                        
                        <button className='bg-[#FC6736] text-[#0C2D57] p-4 rounded-xl'>Start Planning</button>

                    </div>
                    <div className='z-10 p-8  '>
                        <button className="relative overflow-hidden bg-[#0C2D57] text-[#FFB0B0] p-4 rounded-xl font-bold text-2xl hover:bg-[#FC6736] hover:text-[#0C2D57] transition duration-300 ease-in-out">
                            <span className="absolute top-0 left-0 w-full h-full bg-[#FC6736] mix-blend-multiply transition-transform duration-300 ease-in-out transform scale-0 origin-top-left"></span>
                            Register
                        </button>
                    </div>
                </div>
                <img src={pic} alt="" className='sideImage fixed -z-1 select-none' />
            </div>
        </>
    )
}

export default LandingPage