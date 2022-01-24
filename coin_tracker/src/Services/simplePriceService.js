import axios from "axios";

const base = 'https://api.coingecko.com/api/v3/';

class SimplePriceService{
    getSimplePrices(){
        let endpoint ='simple/price';
        let query_param = 'ids=bitcoin%2Cethereum%2Calgorand%2Cavalanche-2%2Csolana&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'
        return axios.get(base + endpoint + `?${query_param}`);
    }
}

export default new SimplePriceService();