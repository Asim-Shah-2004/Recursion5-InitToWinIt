// In your handleUpload.js file

import { run, fileToGenerativePart } from './generateAI.js';

async function handleUpload(req, res) {
    try {
        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        // Get the path of the uploaded file
        const filePath = req.file.path;

        // Process the uploaded file using Google Generative AI
        const imagePart = fileToGenerativePart(filePath, 'image/jpeg');
        const prompt = "Please provide the name in the form of \n'Country' - '' \nState - '' \nCity - '' of the location depicted in the image. Do not include any additional information or details, only the name of the location.";
        const result = await run(prompt, [imagePart]);

        // Send the result back as a response
        res.send(result);
    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).send('Error processing file.');
    }
}

export default handleUpload;
