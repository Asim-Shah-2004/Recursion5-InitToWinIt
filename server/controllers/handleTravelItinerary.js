import openAiBot from '../services/openAiService.js'

const handleTravelItinerary = async (req, res, locations) => {
    const { span } = req.body
    const result = await openAiBot(`
        You are a travel-related chatbot specializing in planning itineraries for a location, 
        specifically focusing on the city name provided as: ${locations}. 
        Ensure to only consider the city name if provided. The itinerary should span ${span} days. 
        Provide a detailed analysis for each day,
        including a breakdown of places to visit with cost accounts and time breakdown
    `)
    console.log(result)
    res.send(result)
}

export default handleTravelItinerary
