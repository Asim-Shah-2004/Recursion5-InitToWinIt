import { openAIBot } from "../services/index.js"

const handleSafetyConsiderations = async (req, res, locations) => {
    try {
        const prompt = (
            `You are a travel releated chatbot and a safety expert specialized on the location:${locations}\n` +
            "make sure that the response 50 to 75 words only make sure not to exceed this " +
            "(only consider the city name if present) and you need to tell the safety preacutions that a " +
            `person travelling in ${locations} must take give detailed explainations on how to impliment these measures`
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.error(err)
        res.send('error while generating prompt')
    }
}

export default handleSafetyConsiderations
