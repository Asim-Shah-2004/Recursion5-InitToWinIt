import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {gemini} from "../config/index.js"

const PROMPT = (
    "Please provide the name in the form of \n'Country' - '' \nState - '' \nCity - '' " +
    "of the location depicted in the image. Do not include any additional information or details, " +
    "only the name of the location."
)

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(filePath, mimeType) {
    const fullPath = fileURLToPath(new URL(filePath, import.meta.url))
    const data = fs.readFileSync(fullPath)
    return {
        inlineData: {
            data: Buffer.from(data).toString('base64'),
            mimeType,
        },
    }
}

// Gemini Bot function to get location of an image
const geminiBot = async (file) => {
    try {
        const model = gemini.getGenerativeModel({ model: 'gemini-pro-vision' })

        const imageParts = [fileToGenerativePart(path.join('..', 'images', file.filename), file.mimetype)]

        const result = await model.generateContent([PROMPT, ...imageParts])
        const response = result.response
        const text = response.text()

        return text
    } catch (err) {
        console.error('Gemini request failed: ', err)
        return "Sorry, we couldn't process your request at the moment. Please try again later."
    }
}

export default geminiBot
