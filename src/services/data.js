import axios from "axios";

const API_URL = 'https://api.coinlore.net/api/tickers/'

export const cryptoData = async() => {
    try {
        const response = await axios.get(API_URL)
        return response.data?.data
    } catch (error) {
        console.log('Crypto Data Error', error);
    }
}