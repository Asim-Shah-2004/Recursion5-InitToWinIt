import openAiBot from '../services/openAiService.js'

const handleThreat = async (req, res, locations) => {
    try {
        const result = await openAiBot(
            `You are a travel-related chatbot specializing in the location: ${locations}
            make sure that the response 50 to 75 words only make sure not to exceed this 
            (consider only the city if provided). Please provide detailed information about the threats a 
            person may face while traveling in this location. Additionally, 
            specify the emergency number and helpline to call if these threats are encountered. 
            Ensure thorough analysis of each threat
            `
        )
        console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send('error while generating prompt')
    }
}

export default handleThreat
