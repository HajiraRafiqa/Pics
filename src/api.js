import axios from "axios";

const searchImages = async (term) =>
{
    console.log("This is term");
    console.log(term);
    const response = await axios.get(`https://api.unsplash.com//search/photos?query=${term}&client_id=TgRChJqO2OC5OTmphnzeVS6hBW9MOzrcg2hNi1s9r9k` ,
    );

    console.log(response);
    return response.data.results;
};


export default searchImages;