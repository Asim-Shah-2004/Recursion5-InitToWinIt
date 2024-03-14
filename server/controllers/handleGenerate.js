import openAiBot from '../services/openAiService.js'

const handleGenerate = async (req, res, location) => {
    try {
        const result = await openAiBot(`
    you are a travel chatbot specialized in giving travel information
    give me some travel releated information 
    regarding the location:${location}(consider the city if present)
    the response 50 to 75 words only make sure not to exceed this
    such that a person travelling there should get a brief overview of the place 
    `)
        console.log(result)
        res.send(result)
    } catch (err) {
        console.log(err)
        res.send('error while generating prompt')
    }
}

export default handleGenerate
