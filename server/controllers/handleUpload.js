// In your handleUpload.js file
import geminiBot from "../services/geminiService.js";
import handleTravelItenary from "./handleTravelItenary.js";

async function handleUpload(req, res) {
    try {
        // Check if a file was uploaded
        if (!req.file)
            return res.status(400).send('No file uploaded.');

        console.log(req.body.type);

        // Process the uploaded file using Google Generative AI
        const locations = await geminiBot(req.file)
        console.log(locations);

        if (req.body.type === "Itenary")
            return await handleTravelItenary(req, res, locations);

        // Send the result back as a response
        res.send("Finish Upload");
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).send('Error processing file.');
    }
}

export default handleUpload;
