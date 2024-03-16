import { openAIBot, getDate } from "../services/index.js"

const handleGeneral = async (req, res, locations) => {
    const { prompt: userPrompt } = req.body
    const formattedDate = getDate()

    try {
        const prompt = (
            "only answer the following question based on the given context location: " +
            `${locations} \only consider the city if present date: ${formattedDate} this is in dd/mm/yyyy format\n` +
            `you are a travel releated chatbot so you should only answer questions pertaning to travelling in ${locations}\n` +
            "use the given context and answer questions based on the given context only\n" +
            "any question should include answer releted to the given context only\n" +
            "the response 50 to 75 words only make sure not to exceed this\n" +
            "some examples :\n" +
            "if you are aksed what will i do at a paticular day use the above context\n" +
            "if you are aksked places to visit use the above context\n" +
            `the question is :${userPrompt}`
        )

        const result = await openAIBot(prompt)

        res.send(result)
    } catch (err) {
        console.error(err)
        res.send(`error while generating prompt`)
    }
}

export default handleGeneral
