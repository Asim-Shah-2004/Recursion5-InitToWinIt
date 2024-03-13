// import React from 'react'
import { useState } from 'react';
import axios from 'axios';
// import { Widget, addResponseMessage } from 'react-chat-widget';
// import ImageUpload from '@/components/ui/ImageUpload';
import plusicon from '../assets/plus.png'
import './Dashboard.css'

// import 'react-chat-widget/lib/styles.css';

const Dashboard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(false);

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

            const response = await axios.post('http://localhost:3000/upload', formData);
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

                <div className="grid grid-cols-2 gap-8 mx-8">

                    <div className="bg-gray-300 h-fit p-4">
                        <div className="bg-gray-500 h-[70vh] p-4 border border-solid rounded-lg overflow-auto">
                            
                            {/* Chat Bubble */}
                            <div className='bg-white grid grid-cols-10 my-2'>
                                <img src={plusicon} className="h-12 col-span-1" />
                                <div className='mx-2 text-lg flex items-center leading-7 col-span-8'>
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className='bg-white grid grid-cols-10'>
                                <div className='col-span-1'></div>
                                <div className='mx-2 text-lg flex justify-end items-center leading-7 col-span-8'>
                                    Lorem ipsum dolor sit ametdnfnddfndfndfnfdndfn
                                    Lorem ipsum dolor sit ametdnfnddfndfndfnfdndfn
                                    Lorem ipsum dolor sit ametdnfnddfndfndfnfdndfn
                                </div>
                                <img src={plusicon} className="h-12 col-span-1" />
                            </div>
                            <div className='bg-white grid grid-cols-10 my-2'>
                                <img src={plusicon} className="h-12 col-span-1" />
                                <div className='mx-2 text-lg flex items-center leading-7 col-span-8'>
                                    Lorem fjkdjflkdjlks fkdjs fkjldskjfl
                                </div>
                            </div>
                            <div className='bg-white grid grid-cols-10'>
                                <div className='col-span-1'></div>
                                <div className='mx-2 text-lg flex justify-end items-center leading-7 col-span-8 *:'>
                                    Lorem ipsum dolor sit amet
                                </div>
                                <img src={plusicon} className="h-12 col-span-1" />
                            </div>
                            <div className='bg-white grid grid-cols-12 my-2'>
                                <img src={plusicon} className="h-12 col-span-1" />
                                <div className='mx-2 text-lg flex items-center leading-7 col-span-10'>
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            <div className='bg-white grid grid-cols-12'>
                                <div className='col-span-1'></div>
                                <div className='mx-2 text-lg flex justify-end items-center leading-7 col-span-10'>
                                    Lorem ipsum dolor sit amet
                                </div>
                                <img src={plusicon} className="h-12 col-span-1" />
                            </div>

                            

                        </div>

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
                                <button className="btn">
                                <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                                    <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                </svg>

                                <span className="text">Generate</span>
                                </button>
                            </div>

                        </div>
                            <div className='my-8 flex justify-around items-center'>
                                <button className='px-2 text-2xl bg-white text-center' onClick={handleSubmit}>Itinerary</button>
                                <button className='px-2 text-2xl bg-white' onClick={handleSubmit}>Budget</button>
                                <button className='px-2 text-2xl bg-white' onClick={handleSubmit}>Security</button>
                                <button className='px-2 text-2xl bg-white' onClick={handleSubmit}>Clothing</button>
                                <button className='px-2 text-2xl bg-white' onClick={handleSubmit}>Food</button>
                            </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Dashboard