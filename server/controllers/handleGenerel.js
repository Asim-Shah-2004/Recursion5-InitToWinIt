import openAiBot from '../services/openAiService.js'
import getDate from '../services/formattedDate.js';
const handdleGenerel = async (req, res, locations) => {
    const {prompt} = req.body;
    const formattedDate = getDate();
    const result = await openAiBot(
        `only answer the following question based on the given context
          location: ${locations} only consider the city if present
          date: ${formattedDate} this is in dd/mm/yyyy format
          Do Not answer anything beyond this context if the question is beyond 
          this say i cant answer beyond the context
          you are a travel releated chatbot so you should only answer questions pertaning to travelling in ${locations}
          the questoion is :${prompt}
        `
    )
    console.log(result)
    res.send(result)
}

export default handdleGenerel
