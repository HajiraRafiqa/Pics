import axios from "axios";

const searchImages = async (term) =>
{
    const response = await axios.get("https://api.unsplash.com/search/photos" ,
    {
        headers: 
        {
            Authorization: "Client-ID TgRChJqO2OC5OTmphnzeVS6hBW9MOzrcg2hNi1s9r9k"
        },
        params:
        {
            query: term,
        },
    });

    console.log(response);
    return response;
};


export default searchImages;