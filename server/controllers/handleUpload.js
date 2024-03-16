import { geminiBot } from "../services/index.js"
import { handleGenerate, handleGeneral, handleItinerary, handleClimate } from "./index.js"
import { handleClothing, handleFamousFood, handleThreat, handleSafetyConsiderations } from "./index.js"

async function handleUpload(req, res) {
    try {
        // Check if a file was uploaded
        if (!req.file) return res.status(400).send('No file uploaded.')

        const reqType = req.body.type
        const locations = await geminiBot(req.file)

        if (reqType === 'Itinerary')
            return await handleItinerary(req, res, locations)
        else if (reqType === 'Food')
            return await handleFamousFood(req, res, locations)
        else if (reqType === 'Security')
            return await handleSafetyConsiderations(req, res, locations)
        else if (reqType === 'Climate')
            return await handleClimate(req, res, locations)
        else if (reqType === 'Clothing')
            return await handleClothing(req, res, locations)
        else if (reqType === 'Threat')
            return await handleThreat(req, res, locations)
        else if (reqType === 'Generate')
            return await handleGenerate(req, res, locations)
        else
            return await handleGeneral(req, res, locations)

    } catch (error) {
        console.error('Error processing file: ', error)
        res.status(500).send('Error processing file.')
    }
}

export default handleUpload
