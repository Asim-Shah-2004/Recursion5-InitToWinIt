import { openAIBot } from "../services/index.js"

const handleGenerate = async (req, res, location) => {
    try {
        const prompt = (
            "You are a travel chatbot specialized in giving travel information\n" +
            `give me some travel releated information regarding the location:${location} ` +
            "(consider the city if present)\nthe response 50 to 75 words only make sure not to exceed this " +
            "such that a person travelling there should get a brief overview of the place"
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.error(err)
        res.send('error while generating prompt')
    }
}

export default handleGenerate
