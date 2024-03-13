import openAiBot from '../services/openAiService.js';
import getDate from '../services/formattedDate.js';

const handleClimate = async (req, res, locations) => {
    const formattedDate = getDate();

    console.log(formattedDate);

    const result = await openAiBot(
        `what kind of climate will be there on my location which is: ${locations} and the date which is ${formattedDate} in dd/mm/yyyy format`
    );

    console.log(result);

    const message = `the kind of climate will be \n ${result}`;
    res.send(message);
}

export default handleClimate;