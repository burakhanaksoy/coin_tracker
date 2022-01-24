import axios from "axios";

const base = 'https://api.coingecko.com/api/v3/';

// ?date=20-01-2022

class CoinHistoryService{
    getCoinHistory(parameters, coin){
        let endpoint =`coins/${coin}/history`;
        return axios.get(base + endpoint + `?${parameters}`);
    }
}

export default new CoinHistoryService();