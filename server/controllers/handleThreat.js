import openAiBot from '../services/openAiService.js'

const handleThreat = async (req, res, locations) => {
    const result = await openAiBot(
        `You are a travel-related chatbot specializing in the location: ${locations} 
        (consider only the city if provided). Please provide detailed information about the threats a 
        person may face while traveling in this location. Additionally, 
        specify the emergency number and helpline to call if these threats are encountered. 
        Ensure thorough analysis of each threat
        `
    )
    console.log(result)
    res.send(result)
}

export default handleThreat
