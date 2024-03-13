// In your handleUpload.js file
import geminiBot from '../services/geminiService.js'
import handleGeneral from './handleGeneral.js'
import handleTravelItinerary from './handleTravelItinerary.js'
import handleFamousFood from './handleFamousFood.js'
import handleSafetyConsiderations from './handleSafetyConsiderations.js'
import handleClimate from './handleClimate.js'
import handleClothing from './handleClothing.js'
import handleThreat from './handleThreat.js'
import handleGenerate from './handleGenerate.js'

async function handleUpload(req, res) {
    try {
        // Check if a file was uploaded
        if (!req.file) return res.status(400).send('No file uploaded.')

        console.log(req.body.type)

        // Process the uploaded file using Google Generative AI
        const locations = await geminiBot(req.file)
        console.log(locations)

        if (req.body.type === 'Itinerary')
            return await handleTravelItinerary(req, res, locations)
        else if (req.body.type === 'Food') {
            return await handleFamousFood(req, res, locations)
        } else if (req.body.type === 'Security') {
            return await handleSafetyConsiderations(req, res, locations)
        } else if (req.body.type === 'Climate') {
            return await handleClimate(req, res, locations)
        } else if (req.body.type === 'Clothing') {
            return await handleClothing(req, res, locations)
        } else if (req.body.type === 'Threat') {
            return await handleThreat(req, res, locations)
        } else if (req.body.type === 'generate') {
            return await handleGenerate(req, res, locations)
        } else {
            return await handleGeneral(req, res, locations)
        }
    } catch (error) {
        console.error('Error processing file:', error)
        res.status(500).send('Error processing file.')
    }
}

export default handleUpload
