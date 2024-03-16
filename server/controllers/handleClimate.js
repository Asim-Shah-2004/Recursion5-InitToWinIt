import { openAIBot, getDate } from "../services/index.js"

const handleClimate = async (req, res, locations) => {
    const formattedDate = getDate()

    try {
        const prompt = (
            "Please provide detailed information about the climate in your specified location, " +
            `identified as: ${locations}(only include the city name if present), for the date ${formattedDate} ` +
            "(formatted as dd/mm/yyyy).\nEnsure the response is thorough and informative make " +
            "the response 50 to 75 words only make sure not to exceed this\n" +
            "Include relevant details such as temperature ranges, precipitation forecasts, " +
            "and any notable weather patterns expected on that date."
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.log(err)
        res.send("error while generating prompt")
    }
}

export default handleClimate
