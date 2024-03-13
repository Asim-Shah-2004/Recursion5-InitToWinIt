import openAiBot from '../services/openAiService.js'

const handleTravelItenary = async (req, res, locations) => {
    const result = await openAiBot(`Give me a Travel Iternary based on my location which is: ${locations}`)
    console.log(result);
    res.send(result);
}

export default handleTravelItenary
