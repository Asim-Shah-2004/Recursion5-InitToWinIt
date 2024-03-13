import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.HUGGING_FACE_ACCESS_TOKEN;
const modelUrl = process.env.MODEL_URL;

const handleTextToSpeech = async (req, res) => {
    const { data } = req.body;
    try {
        const response = await axios.post(
            modelUrl,
            { inputs: data },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                responseType: 'arraybuffer', // Specify responseType as 'arraybuffer' to receive ArrayBuffer directly
            }
        );

        // Get the generated audio data as an ArrayBuffer
        const audioData = response.data;

        // Check if the HTTP response is not successful
        if (response.status !== 200) {
            throw new Error('Request failed');
        }

        // Create an HTTP response with the generated audio data
        res.setHeader('Content-Type', 'audio/mpeg'); // Adjust the content type based on the actual audio format
        res.send(Buffer.from(audioData)); // Send the audio data as a Buffer
        console.log('Send successful');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

export default handleTextToSpeech;
