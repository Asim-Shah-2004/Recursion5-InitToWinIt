import { convertTTS } from "../services/index.js"

const handleTextToSpeech = async (req, res) => {
    const { data } = req.body

    try {
        // Temporary fix
        if (data === ". . . .")
            return

        const audioData = await convertTTS(data)

        // Create an HTTP response with the generated audio data
        res.setHeader('Content-Type', 'audio/mpeg') // Adjust the content type based on the actual audio format
        res.send(Buffer.from(audioData)) // Send the audio data as a Buffer
    } catch (err) {
        console.error('Error:', err)
        res.status(500).send('Internal Server Error')
    }
}

export default handleTextToSpeech
