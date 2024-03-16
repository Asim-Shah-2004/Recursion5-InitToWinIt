import { openai } from '../config/index.js'

const openAIBot = async (prompt) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `${prompt}` }],
            model: 'gpt-3.5-turbo',
        })

        const result = response.choices[0].message.content
        return result
    } catch (err) {
        console.error('OpenAI request failed: ', err)
        return "Sorry, we couldn't process your request at the moment. Please try again later."
    }
}

export default openAIBot
