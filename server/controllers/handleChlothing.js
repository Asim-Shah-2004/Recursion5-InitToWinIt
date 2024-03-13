import openAiBot from '../services/openAiService.js';
import getDate from '../services/formattedDate.js';

const handleChlothing = async (req, res, locations) => {
    const formattedDate = getDate();

    console.log(formattedDate);

    const result = await openAiBot(
       `give me clothing recommendations based on the location, 
       identified as: ${locations}(only take the city name if present), and the date ${formattedDate} (formatted as dd/mm/yyyy). 
       Please suggest appropriate clothing based on the expected weather conditions for that date, 
       considering factors such as temperature, humidity, and precipitation forecasts. Ensure the recommendations are detailed and 
       tailored to the specific climate expected in the given location on the specified date`
    );

    console.log(result);
    res.send(result);
}

export default handleChlothing;