import { openAIBot, getDate } from "../services/index.js"

const handleClothing = async (req, res, locations) => {
    const formattedDate = getDate()

    try {
        const prompt = (
            "Give me clothing recommendations based on the location, " +
            `identified as: ${locations}(only take the city name if present), and the date ${formattedDate} ` +
            "(formatted as dd/mm/yyyy).\nPlease suggest appropriate clothing based on the expected weather conditions " +
            "for that date, considering factors such as temperature, humidity, and precipitation forecasts.\n" +
            "the response 50 to 75 words only make sure not to exceed this and Ensure the recommendations are detailed and " +
            "tailored to the specific climate expected in the given location on the specified date"
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.log(err)
        res.send('error while generating prompt')
    }
}

export default handleClothing
