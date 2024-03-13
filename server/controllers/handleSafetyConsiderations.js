import openAiBot from '../services/openAiService.js'

const handleSafetyConsiderations = async (req, res, locations) => {
    const result = await openAiBot(`what are the safety considerations that i should take based on my location which is: ${locations}`)
    const message = `some safety considerations that you should take are \n ${result}`
    console.log(message);
    res.send(message);
}

export default handleSafetyConsiderations
