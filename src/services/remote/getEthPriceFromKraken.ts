import { fetchApi } from "@/utils/fetchApi";
import { krakenEthPriceUrl } from "@/utils/apiConstants";

export const getEthPriceFromKraken = async (): Promise<number> =>
    fetchApi({ url: krakenEthPriceUrl() })
        .then((data) => parseFloat(data.result.XETHZUSD.c[0]))
        .catch((err) => err);