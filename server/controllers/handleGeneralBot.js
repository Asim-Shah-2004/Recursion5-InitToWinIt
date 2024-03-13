import openAiBot from '../services/openAiService.js'

const handleGeneralBot = async (req, res) => {
    const { prompt } = req.body
    try {
        // const result = await openAiBot(
        //     ` "Is the question related to travel? 
        //      ${prompt}" 
        //     Respond with 'yes' if the question is related to travel; 
        //     otherwise, respond with 'no' (omit any other words).
        //     `
        // )
        // console.log(result)
        // if (result.toLocaleLowerCase() === 'yes') {
        //     console.log('awaiting openai');
        //     const response = await openAiBot(`
        //     ${prompt}`)
        //     res.send(response)
        // } else {
        //     res.send(`cannot answer the following question`)
        // }
        const result = await openAiBot(`please answer this question :${prompt}`)
        console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error)
        res.send(`error while generating prompt`)
    }
}

export default handleGeneralBot
