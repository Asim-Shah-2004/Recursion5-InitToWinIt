import fetch from 'node-fetch' // Import fetch
import dotenv from 'dotenv'
dotenv.config()
const token = process.env.HUGGING_FACE_ACCESS_TOKEN
const model_url = process.env.MODEL_URL
const textToSpeech = async (req, res) => {
    const { data } = req.body
    try {
        const response = await fetch(
            model_url,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ inputs: data }),
            }
        )

        // Get the generated audio data as an ArrayBuffer
        const audioData = await response.arrayBuffer()

        // Check if the HTTP response is not successful
        if (!response.ok) {
            throw new Error('Request failed')
        }

        // Create an HTTP response with the generated audio data
        res.setHeader('Content-Type', 'audio/mpeg') // Adjust the content type based on the actual audio format
        res.send(Buffer.from(audioData)) // Send the audio data as a Buffer
        console.log('send successful')
    } catch (error) {
        console.error('Error:', error)
        res.status(500).send('Internal Server Error')
    }
}

export default textToSpeech
