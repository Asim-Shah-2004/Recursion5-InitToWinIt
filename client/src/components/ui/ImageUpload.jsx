import React, { useState } from 'react'
import axios from 'axios';

const ImageUpload = () => {
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
    };


    return (
        <>
            <h1 className='text-3xl text-red-700'>Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Upload</button>
                {
                    error && <p>There was an error uploading the image</p>
                }
            </form>

        </>
    )
}

export default ImageUpload