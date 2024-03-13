import openAiBot from "../services/openAiService.js";


const handleGenerelBot = async(req,res)=>{
    const {prompt} = req.body;
    const result = await openAiBot(
        ` is the question releted to travelling if releted the write only yes
        dont write any other word otherwise answer with only no dont write any other word
        the question is: ${prompt}
        `
    )
    console.log(result)
    if(result==='Yes'){
        const response = await openAiBot(
           `${prompt}`
        )
        res.send(response)
    }else{
        res.send(`cannot answer the following question`)    
    }
    
}

export default handleGenerelBot