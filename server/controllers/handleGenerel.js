import openAiBot from '../services/openAiService.js'
import getDate from '../services/formattedDate.js';
const handdleGenerel = async (req, res, locations) => {
    const {prompt} = req.body;
    const formattedDate = getDate();
    const result = await openAiBot(
        `only answer the following question based on the given context
          location: ${locations} only consider the city if present
          date: ${formattedDate} this is in dd/mm/yyyy format
          you are a travel releated chatbot so you should only answer questions pertaning to travelling in ${locations}
          use the given context and answer questions based on the given context only
          any question should include answer releted to the given context only
          some examples :
          if you are aksed what will i do at a paticular day use the above context
          if you are aksked places to visit use the above context
          the questoion is :${prompt}
        `
    )
    console.log(result)
    res.send(result)
}

export default handdleGenerel
