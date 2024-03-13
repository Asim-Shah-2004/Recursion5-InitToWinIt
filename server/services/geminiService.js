import gemini from "../config/geminiOptions.js"
import fs from "fs"
import { fileURLToPath } from "url"

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(filePath, mimeType) {
    // console.log(new URL(filePath, import.meta.url))
    const fullPath = fileURLToPath(new URL(filePath, import.meta.url))
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(fullPath)).toString('base64'),
            mimeType,
        },
    }
}

const geminiBot = async (file) => {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = gemini.getGenerativeModel({ model: "gemini-pro-vision" })

    const prompt = "Please provide the name in the form of \n'Country' - '' \nState - '' \nCity - '' of the location depicted in the image. Do not include any additional information or details, only the name of the location."

    const imageParts = [
        fileToGenerativePart(`..\\Images\\${file.filename}`, file.mimetype),
    ]

    const result = await model.generateContent([prompt, ...imageParts])
    const response = await result.response
    const text = response.text()
    return text
}

export default geminiBot