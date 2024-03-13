import openAiBot from '../services/openAiService.js'
import getDate from '../services/formattedDate.js'

const handleClimate = async (req, res, locations) => {
    const formattedDate = getDate()

    console.log(formattedDate)

    const result = await openAiBot(
        `Please provide detailed information about the climate in your specified location, 
        identified as: ${locations}(only include the city name if present), for the date ${formattedDate} (formatted as dd/mm/yyyy). 
        Include relevant details such as temperature ranges, precipitation forecasts, 
        and any notable weather patterns expected on that date. Ensure the response is thorough and informative`
    )

    console.log(result)
    res.send(result)
}

export default handleClimate
