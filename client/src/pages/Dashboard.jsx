// import React from 'react'
import { useEffect, useRef, useState } from 'react';
import ChatComp from '@/components/ui/ChatComp';
import DatePicker from '@/components/ui/DatePicker';
import DashboardButtons from '@/components/ui/DashboardButtons';
import axios from 'axios';
import plusicon from '../assets/plus.png'
import './Dashboard.css'

const SERVERURL = import.meta.env.VITE_SERVERURL;

const handleOnClick = async (inputText, file, span, setMessageHistory, setInputText) => {

    const formData = new FormData()
    formData.append('image', file)
    formData.append('span', span)

    console.log(inputText);

    if (!file && inputText) {
        formData.append('prompt', inputText)
        setMessageHistory(prevMessages => {
            const updatedMessages = [...prevMessages, inputText];
            return updatedMessages
        })

        const response = await axios.post(`${SERVERURL}/general`, formData);

        setMessageHistory(prevMessages => {
            const updatedMessages = [...prevMessages, response.data];
            return updatedMessages
        })
    }

    if (file && !inputText) {
        const prompt = "Give me some travel information about the provided image"
        formData.append('type', "Generate")
        setMessageHistory(prevMessages => {
            const updatedMessages = [...prevMessages, prompt];
            return updatedMessages
        })

        const response = await axios.post(`${SERVERURL}/upload`, formData);

        setMessageHistory(prevMessages => {
            const updatedMessages = [...prevMessages, response.data];
            return updatedMessages
        })
        console.log('Image uploaded successfully:', response.data);
    }

    if (file && inputText) {
        formData.append('type', "General")
        formData.append('prompt', inputText)
        setMessageHistory(prevMessages => {
            const updatedMessages = [...prevMessages, inputText];
            return updatedMessages
        })

        const response = await axios.post(`${SERVERURL}/upload`, formData);

        setMessageHistory(prevMessages => {
            const updatedMessages = [...prevMessages, response.data];
            return updatedMessages
        })
        console.log('Image uploaded successfully:', response.data);
    }
    setInputText("");
}

const Dashboard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState(false);
    const [span, setSpan] = useState(30);
    const [messageHistory, setMessageHistory] = useState([]);
    const [inputText, setInputText] = useState('');
    const [responseArrived, setResponseArrived] = useState(false);


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

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
    };


    return (
        <>
            <div className='w-full h-screen bg-[#0C2D57] mx-auto'>
                <div className='max-w-[1440px] mx-auto flex'>
                    <div className='flex-grow'>
                        <h2 className='text-5xl p-4 font-bold  text-[#FC6736]'>Travel</h2>
                        <h2 className='text-5xl ml-7 font-bold -mt-10 p-4 text-[#EFECEC]'>Smart</h2>
                    </div>

                    <div>
                        <h1 className='text-white text-6xl mt-6 mr-16'>Hello {localStorage.getItem('username').toUpperCase()} ......</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mx-8">

                    <div className="h-[75vh] p-4 example" >
                        <ChatComp messages={messageHistory} />

                        <div className="relative mt-5" >
                            <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-message-square"><path d="M12 6V2H8" /><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" /><path d="M2 12h2" /><path d="M9 11v2" /><path d="M15 11v2" /><path d="M20 12h2" /></svg>
                            </span>

                            <input
                                type="text"
                                className="pl-10 pr-12 py-2 border rounded-full w-full focus:outline-none focus:border-blue-500"
                                placeholder="Enter text..."
                                value={inputText}
                                onChange={handleChange}
                            />

                            {/* Trailing button */}
                            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => handleOnClick(inputText, selectedFile, span, setMessageHistory, setInputText)}>
                                {/* Your trailing button content, e.g., an icon or text */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>
                            </button>
                        </div>

                    </div>

                    <div className=" h-fit p-4">
                        <div className="bg-[#3D3B40] h-[30vh] p-4 rounded-lg w-full flex">
                            <div className="flex justify-center items-center h-40 w-1/2 p-4 rounded-lg relative">
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
                            <div className='fixed ml-[24rem] mt-0'>
                                {selectedFile ?
                                    <>
                                        <button className={`btn`} onClick={() => handleOnClick(inputText, selectedFile, span, setMessageHistory, setInputText)}>
                                            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                                                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                            </svg>

                                            <span className="text"> Generate </span>
                                        </button>
                                        <p className='mt-4 font-bold text-[#FC6736]'>For general info click the above button</p>
                                    </>
                                    :
                                    <div className='p-4 bg-slate-400 rounded-full select-none mt-4'>Upload a file to generate response </div>
                                }
                            </div>


                        </div>

                        {selectedFile && <div className='my-8 flex font-bold text-[#FC6736] text-xl justify-around items-center bg-[#3D3B40] p-4 rounded-lg mt-5 flex-col'>
                            Or if you want detailed analysis click any of these buttons
                            <div className='flex w-full justify-evenly'>
                                <DashboardButtons text={'Itinerary'} file={selectedFile} span={span} updateMessage={setMessageHistory} />
                                <DashboardButtons text={'Threat'} file={selectedFile} updateMessage={setMessageHistory} />
                                <DashboardButtons text={'Food'} file={selectedFile} updateMessage={setMessageHistory} />

                            </div>
                            <div className='flex w-full justify-evenly mt-7'>

                                <DashboardButtons text={'Clothing'} file={selectedFile} updateMessage={setMessageHistory} />
                                <DashboardButtons text={'Security'} file={selectedFile} updateMessage={setMessageHistory} />
                                <DashboardButtons text={'Climate'} file={selectedFile} updateMessage={setMessageHistory} />

                            </div>

                        </div>}
                        <div className='bg-[#3D3B40]  p-4 rounded-lg mt-5'>

                            <span className='text-[#FC6736] font-bold text-xl '>Please enter your trip dates to help us plan better.</span>
                            <DatePicker setDateDiff={setSpan} />
                        </div>



                    </div>


                </div>

            </div>
        </>
    )
}

export default Dashboard