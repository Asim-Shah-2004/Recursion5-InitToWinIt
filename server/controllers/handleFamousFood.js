import openAiBot from '../services/openAiService.js'

const handleFamousFood = async (req, res, locations) => {
    const result = await openAiBot(`suggest me some famous food based on my location which is: ${locations}`)
    console.log(result);
    const message = `Some of the famous food here include \n ${result}`
    res.send(message);
}

export default handleFamousFood
