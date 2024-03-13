import { GoogleGenerativeAI } from '@google/generative-ai'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY)

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(filePath, mimeType) {
    // console.log(new URL(filePath, import.meta.url));
    const fullPath = fileURLToPath(new URL(filePath, import.meta.url))
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(fullPath)).toString('base64'),
            mimeType,
        },
    }
}

async function run() {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' })

    const prompt =
        "Please provide the name in the form of \n'Country' - '' \nState - '' \nCity - '' of the location depicted in the image. Do not include any additional information or details, only the name of the location."

    const imageParts = [fileToGenerativePart('./test/image.jpg', 'image/jpeg')]

    const result = await model.generateContent([prompt, ...imageParts])
    const response = await result.response
    const text = response.text()
    console.log(text)
}

run()
