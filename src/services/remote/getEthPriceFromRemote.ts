import { binanceEthPriceUrl } from "@/utils/apiConstants";
import { fetchApi } from "@/utils/fetchApi";

export const getEthPriceFromRemote = async (): Promise<number> =>
    fetchApi({ url: binanceEthPriceUrl() })
        .then((data) => parseFloat(data.price))
        .catch((err) => err);