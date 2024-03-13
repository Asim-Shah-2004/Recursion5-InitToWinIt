import openAiBot from '../services/openAiService.js'

const handleFamousFood = async (req, res, locations) => {
    const result = await openAiBot(`
        provide me culinary recommendations based on your location, identified as: ${locations}(only take the city name if present). 
        Please suggest some famous local dishes or food specialties.
        Ensure the suggestions are tailored to the cuisine prevalent in the specified location
    `)
    console.log(result);
    res.send(result);
}

export default handleFamousFood