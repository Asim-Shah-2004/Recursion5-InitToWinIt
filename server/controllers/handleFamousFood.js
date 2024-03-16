import { openAIBot } from "../services/index.js"

const handleFamousFood = async (req, res, locations) => {
    try {
        const prompt = (
            `Provide me culinary recommendations based on your location, identified as: ${locations}` +
            "(only take the city name if present).\n" +
            "Please suggest some famous local dishes or food specialties.\n" +
            "the response 50 to 75 words only make sure not to exceed this\n" +
            "Ensure the suggestions are tailored to the cuisine prevalent in the specified location"
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.error(err)
        res.send('error while generating prompt')
    }
}

export default handleFamousFood
