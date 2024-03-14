import openAiBot from '../services/openAiService.js'
import openai from '../config/openaiOptions.js'
const handleGeneralBot = async (req, res) => {
    const { prompt } = req.body
    try {
        const result = await openAiBot(
            ` "Is the question related to travel and tourism? 
             ${prompt}" 
            Respond with 'yes' if the question is related to travel or tourism; 
            otherwise, respond with 'no' (omit any other words).
            `
        )
        console.log(result)
        if (result.toLocaleLowerCase() === 'yes') {
            console.log('awaiting openai');
            try{
                const response = await openai.chat.completions.create({
                    messages: [{ role: 'user', content: `answer this question : ${prompt}?` }],
                    model: 'gpt-3.5-turbo',
                })
        
                const result = response.choices[0].message.content
                console.log(result);
                res.send(result)
            }catch(err){
                console.log(err);
                res.send('error while generating prompt')
            }
        } else {
            res.send(`cannot answer the following question`)
        }

    } catch (error) {
        console.log(error)
        res.send(`error while generating prompt`)
    }
}

export default handleGeneralBot
