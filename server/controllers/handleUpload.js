// In your handleUpload.js file
import geminiBot from '../services/geminiService.js'
import handleTravelItenary from './handleTravelItenary.js'
import handleFamousFood from './handleFamousFood.js'
import handleSafetyConsiderations from './handleSafetyConsiderations.js'
import handleClimate from './handleClimate.js'
import handleChlothing from './handleChlothing.js'
import handleThreat from './handleThreat.js'
import handleGenerel from './handleGenerel.js'
async function handleUpload(req, res) {
    try {
        // Check if a file was uploaded
        if (!req.file) return res.status(400).send('No file uploaded.')

        console.log(req.body.type)

        // Process the uploaded file using Google Generative AI
        const locations = await geminiBot(req.file)
        console.log(locations)

        if (req.body.type === 'Itenary')
            return await handleTravelItenary(req, res, locations)
        else if (req.body.type === 'food') {
            return await handleFamousFood(req, res, locations)
        }else if(req.body.type==='safety'){
            return await handleSafetyConsiderations(req,res,locations)
        }else if(req.body.type==='climate'){
            return await handleClimate(req,res,locations)
        }else if(req.body.type==='chlothing'){
            return await handleChlothing(req,res,locations)
        }else if(req.body.type==='threat'){
            return await handleThreat(req,res,locations)
        }else{
            return await handleGenerel(req,res,locations)   
        }

        // Send the result back as a response
        res.send('Finish Upload')
    } catch (error) {
        console.error('Error processing file:', error)
        res.status(500).send('Error processing file.')
    }
}

export default handleUpload
