/*****************
 * REMOTE API URLS
 *****************/

export const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
export const BINANCE_API_URL = 'https://api.binance.com/api/v3';
export const KRAKEN_API_URL = 'https://api.kraken.com/0'

export const etherscanGasTrackerUrl = (apiKey: string) => `${ETHERSCAN_API_URL}?module=gastracker&action=gasoracle&apikey=${apiKey}`;
export const binanceEthPriceUrl = () => `${BINANCE_API_URL}/ticker/price?symbol=ETHUSDT`;
export const krakenEthPriceUrl = () => `${KRAKEN_API_URL}/public/Ticker?pair=ETHUSD`;


/*****************
 * LOCAL API URLS
 *****************/
export const appGasInfoUrl = () => `${process.env.NEXT_PUBLIC_APP_URL}/api/gas-info`;