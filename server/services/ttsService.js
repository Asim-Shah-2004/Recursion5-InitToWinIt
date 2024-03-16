import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.HUGGING_FACE_ACCESS_TOKEN
const modelUrl = process.env.MODEL_URL

const convertTTS = async (data) => {
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
        )

        // Get the generated audio data as an ArrayBuffer
        const audioData = response.data

        // Check if the HTTP response is not successful
        if (response.status !== 200)
            throw new Error('Request failed')

        return audioData
    } catch (err) {
        console.error('Error:', err)
        throw err
    }
}

export default convertTTS
