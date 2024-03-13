import React from 'react'
import pic from '../assets/eiffel.jpg'
import '../App.css'

const LandingPage = () => {
    return (
        <>
            <div className='w-full h-screen bg-[#0C2D57] mx-auto'>
                <div className='max-w-[1440px] mx-auto flex justify-between'>
                    <div >

                        <h1 className='text-5xl p-4 font-bold  text-[#FC6736]'>Travel</h1>
                        <h1 className='text-5xl ml-7 font-bold -mt-10 p-4 text-[#EFECEC]'>Smart</h1>

                    </div>
                        <div className='z-10 '>Start Planning</div>




                </div>
                <img src={pic} alt="" className='sideImage fixed -z-1'    />
            </div>
        </>
    )
}

export default LandingPage