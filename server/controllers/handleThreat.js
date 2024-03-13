import openAiBot from '../services/openAiService.js'

const handleThreat = async (req, res, locations) => {
    const result = await openAiBot(
        `give me information about threaths in given my location which is: ${locations} also tell where should i reach out to in case of these threaths`
    )
    console.log(result)
    const message = `threaths you might face here are \n ${result}`
    res.send(message)
}

export default handleThreat
