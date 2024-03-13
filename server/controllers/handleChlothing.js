import openAiBot from '../services/openAiService.js';
import getDate from '../services/formattedDate.js';

const handleChlothing = async (req, res, locations) => {
    const formattedDate = getDate();

    console.log(formattedDate);

    const result = await openAiBot(
        `suggest me what kind of clothing I should wear based on my location which is: ${locations} and the date which is ${formattedDate} in dd/mm/yyyy format`
    );

    console.log(result);

    const message = `the type of clothes you should wear are \n ${result}`;
    res.send(message);
}

export default handleChlothing;