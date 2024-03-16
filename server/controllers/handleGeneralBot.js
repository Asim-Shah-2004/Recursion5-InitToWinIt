import { openAIBot } from "../services/index.js"

const handleGeneralBot = async (req, res) => {
    const { prompt: userPrompt } = req.body

    try {
        const prompt = (
            `Is the question related to travel and tourism?\n${userPrompt}\n` +
            "Respond with 'yes' if the question is related to travel or tourism; " +
            "otherwise, respond with 'no' (omit any other words)."
        )

        const result = await openAIBot(prompt)

        if (result.toLocaleLowerCase() === 'yes') {
            const result = await openAIBot(`answer this question : ${userPrompt}?`)
            res.send(result)
        } else {
            res.send(`Cannot answer the following question`)
        }

    } catch (err) {
        console.error(err)
        res.send(`error while generating prompt`)
    }
}

export default handleGeneralBot
