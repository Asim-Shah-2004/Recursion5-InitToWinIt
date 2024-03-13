import openAiBot from '../services/openAiService.js'

const handleGenerate = async (req, res, location) => {
    const result = await openAiBot(`
    you are a travel chatbot specialized in giving travel information
    give me some travel releated information 
    regarding the location:${location}(consider the city if present)
    such that a person travelling there should get a brief overview of the place 
    `)
    console.log(result)
}

export default handleGenerate
