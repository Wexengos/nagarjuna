import axios from "axios";

export const getTodayQuote = async () => {
    const response = await axios.get("/api/api/today");

    console.log("response: ", response);

    return response.data;
}
