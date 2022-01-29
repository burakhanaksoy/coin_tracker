import axios from "axios";

const base = 'https://api.coingecko.com/api/v3/';

class SimplePriceService {
    getSimplePrices(currency = "usd") {
        let endpoint = 'simple/price';
        let query_param = 'ids=harmony%2Ctether%2Cbinancecoin%2Cusd-coin%2Cripple%2Cbinance-usd%2Cdai%2Cftx-token%2Cviper%2Cdogecoin%2Cterra-luna%2Ctheta-token%2Cmatic-network%2Ctezos%2Cbitcoin%2Cethereum%2Calgorand%2Cpolkadot%2Csolana%2Cavalanche-2%2Ccosmos%2Cthe-open-network%2C&vs_currencies=' + `${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
        return axios.get(base + endpoint + `?${query_param}`);
    }
}

export default new SimplePriceService();