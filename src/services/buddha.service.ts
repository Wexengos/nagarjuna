import axios from "axios";

export const getTodayQuote = async () => {
    const name = Math.random() < 0.5 ? "buddha" : "dogen";

    const response = await axios.get(`/api/api/today?by=${name}`);

    console.log("response: ", response);

    return response.data;
}

export const getRandomQuote = async () => {
    const name = Math.random() < 0.5 ? "buddha" : "dogen";

    const response = await axios.get(`/api/api/random?by=${name}`);

    console.log("response: ", response);

    return response.data;
}