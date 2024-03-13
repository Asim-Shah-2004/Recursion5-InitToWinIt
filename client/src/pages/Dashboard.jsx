// import React from 'react'
import { useState } from 'react';
import axios from 'axios';
// import { Widget, addResponseMessage } from 'react-chat-widget';
// import ImageUpload from '@/components/ui/ImageUpload';
import plusicon from '../assets/plus.png'

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
                            <div className='bg-white flex items-center'>
                                <img src={plusicon} className="h-12" />
                                <div className='mx-2 text-lg align-middle leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed commodo turpis, quis condimentum dui. Integer eget lectus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis mattis at tellus eget porttitor. Ut et leo tortor. Etiam tincidunt pulvinar felis, id egestas elit malesuada vitae. Nulla nec neque in ex ultrices auctor id ac dui. Aliquam imperdiet in libero molestie egestas. Maecenas non dui aliquet, aliquet elit nec, blandit ante. Vestibulum condimentum tellus nunc, non imperdiet libero venenatis nec. Praesent ligula lacus, auctor sed quam eget, pretium semper nunc.

                                    Suspendisse placerat justo nisi, sit amet tempus enim faucibus sed. Nunc quis quam vitae enim molestie facilisis. Curabitur scelerisque, quam eget volutpat condimentum, arcu risus feugiat ex, eget pretium tortor lectus eget metus. Donec lorem urna, pellentesque non dapibus in, scelerisque malesuada erat. Vestibulum nunc velit, efficitur in tellus non, ullamcorper ullamcorper ex. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a gravida neque. Praesent volutpat pretium scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed commodo turpis, quis condimentum dui. Integer eget lectus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis mattis at tellus eget porttitor. Ut et leo tortor. Etiam tincidunt pulvinar felis, id egestas elit malesuada vitae. Nulla nec neque in ex ultrices auctor id ac dui. Aliquam imperdiet in libero molestie egestas. Maecenas non dui aliquet, aliquet elit nec, blandit ante. Vestibulum condimentum tellus nunc, non imperdiet libero venenatis nec. Praesent ligula lacus, auctor sed quam eget, pretium semper nunc.

                                    Suspendisse placerat justo nisi, sit amet tempus enim faucibus sed. Nunc quis quam vitae enim molestie facilisis. Curabitur scelerisque, quam eget volutpat condimentum, arcu risus feugiat ex, eget pretium tortor lectus eget metus. Donec lorem urna, pellentesque non dapibus in, scelerisque malesuada erat. Vestibulum nunc velit, efficitur in tellus non, ullamcorper ullamcorper ex. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a gravida neque. Praesent volutpat pretium scelerisque.</div>
                            </div>
                            {/* <Chat Bot /> */}
                        </div>

                    </div>

                    <div className="bg-gray-300 h-fit p-4">
                        <div className="bg-gray-600 h-[70vh] p-4 border border-solid rounded-lg">
                            <div className="flex justify-center items-center bg-gray-500 h-80 p-4 border border-solid rounded-lg relative">
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

                            <div className='my-8 flex justify-around items-center'>
                                <button className='px-2 text-2xl bg-white text-center' onClick={handleSubmit}>Test 1</button>
                                <button className='px-2 text-2xl bg-white' onClick={handleSubmit}>Test 1</button>
                                <button className='px-2 text-2xl bg-white' onClick={handleSubmit}>Test 1</button>
                                <button className='px-2 text-2xl bg-white' onClick={handleSubmit}>Test 1</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Dashboard