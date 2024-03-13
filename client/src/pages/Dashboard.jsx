// import React from 'react'
import { useState } from 'react';
import ChatComp from '@/components/ui/ChatComp';
import DatePicker from '@/components/ui/DatePicker';
import DashboardButtons from '@/components/ui/DashboardButtons';
import axios from 'axios';
import plusicon from '../assets/plus.png'
import './Dashboard.css'

const SERVERURL = import.meta.env.VITE_SERVER_URL;

const Dashboard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(false);
    const [span, setSpan] = useState(30);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('submit')
        if (!selectedFile) {
            console.error('No file selected');
            setError(true);
            return;
        }

        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await axios.post(`${SERVERURL}/upload`, formData);
            console.log('Image uploaded successfully:', response.data);
        }
        catch (error) {
            console.log('Error uploading image:');
            console.log(error);
        }
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
    };

    return (
        <>
            <div className='w-full h-screen bg-[#0C2D57] mx-auto'>
                <div className='max-w-[1440px] mx-auto'>
                    <div>
                        <h2 className='text-5xl p-4 font-bold  text-[#FC6736]'>Travel</h2>
                        <h2 className='text-5xl ml-7 font-bold -mt-10 p-4 text-[#EFECEC]'>Smart</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mx-8">

                    <div className="bg-gray-300 h-fit p-4">
                        <ChatComp />


                    </div>

                    <div className="bg-gray-300 h-fit p-4">
                        <div className="bg-gray-600 h-[30vh] p-4 border border-solid rounded-lg w-full flex">
                            <div className="flex justify-center items-center bg-gray-500 h-40 w-1/2 p-4 border border-solid rounded-lg relative">
                                <input type="file" accept="image/*" onChange={handleFileChange} className='w-full h-full opacity-0 absolute' />
                                {selectedFile ? (
                                    <img
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Selected Image"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                ) : (
                                    <img src={plusicon} width="110vw" alt="Plus Icon" />
                                )}
                            </div>
                            <div className='fixed ml-96 mt-8'>
                                {selectedFile ?
                                    <button className={`btn`}>
                                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                        </svg>

                                        <span className="text">Generate</span>
                                    </button>

                                    :
                                    <div className='p-4 bg-slate-500 rounded-full select-none mt-4'>Upload a file to generate response </div>
                                }
                            </div>


                        </div>
                        <div className='bg-gray-600 p-4 rounded-lg'>

                            <span className='text-slate-900'>Please enter your trip dates to help us plan better.</span>
                            <DatePicker setDateDiff={setSpan} />
                        </div>
                        {selectedFile && <div className='my-8 flex justify-around items-center'>
                            <DashboardButtons text={'Itinerary'} file={selectedFile} span={span}/>
                            <DashboardButtons text={'Threat'} file={selectedFile}/>
                            <DashboardButtons text={'Food'} file={selectedFile}/>
                            <DashboardButtons text={'Clothing'} file={selectedFile}/>
                            <DashboardButtons text={'Security'} file={selectedFile}/>
                            <DashboardButtons text={'Climate'} file={selectedFile} />

                        </div>}



                    </div>


                </div>

            </div>
        </>
    )
}

export default Dashboard