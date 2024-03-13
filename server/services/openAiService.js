import openai from "../config/openaiOptions.js";

const openAiBot = async(req,res)=>{
    const {prompt} = req.body;
    try{
        const response = await openai.chat.completions.create({
            messages:[{role:'user',content:`${prompt}`}],
            model:'gpt-3.5-turbo'
        })
        const result = response.choices[0].message.content
        res.send({message:result})
    }catch(err){
        console.log(err)
        res.send({message:"error in openAi bot"})
    }
}

export default openAiBot