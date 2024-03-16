import { openAIBot } from "../services/index.js"

const handleThreat = async (req, res, locations) => {
    try {
        const prompt = (
            `You are a travel-related chatbot specializing in the location: ${locations}` +
            "make sure that the response 50 to 75 words only make sure not to exceed this " +
            "(consider only the city if provided).\nPlease provide detailed information about the threats a " +
            "person may face while traveling in this location. Additionally, specify the emergency number " +
            "and helpline to call if these threats are encountered. Ensure thorough analysis of each threat"
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.error(err)
        res.send('error while generating prompt')
    }
}

export default handleThreat
