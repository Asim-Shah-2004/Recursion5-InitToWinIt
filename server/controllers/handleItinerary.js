import { openAIBot } from "../services/index.js"

const handleItinerary = async (req, res, locations) => {
    const { span } = req.body

    try {
        const prompt = (
            "You are a travel-related chatbot specializing in planning itineraries for a location, " +
            `specifically focusing on the city name provided as: ${locations}.\n` +
            `Ensure to only consider the city name if provided. The itinerary should span ${span} days.\n` +
            "Provide a detailed analysis for each day, " +
            "including a breakdown of places to visit with cost accounts and time breakdown"
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.error(err)
        res.send('error while generating prompt')
    }
}

export default handleItinerary
