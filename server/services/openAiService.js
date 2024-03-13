import openai from '../config/openaiOptions.js'

const openAiBot = async (prompt) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `${prompt}` }],
            model: 'gpt-3.5-turbo',
        })

        const result = response.choices[0].message.content
        return result
    } catch (err) {
        console.log(err)
        return "Sorry Can't servcie right now"
    }
}

export default openAiBot
