import openAiBot from '../services/openAiService.js'

const handleSafetyConsiderations = async (req, res, locations) => {
    try {
        const result = await openAiBot(
            `
            you are a travel releated chatbot and a safety expert specialized on the location:${locations} 
            (only consider the city name if present) 
            and you need to tell the safety preacutions that a
            person travelling in ${locations} must take give detailed explainations on how to impliment these measures
            `
        )
        res.send(result)
    } catch (error) {
        console.log(error);
        res.send('error while generating prompt')
    }
}

export default handleSafetyConsiderations
