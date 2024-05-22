import { API_ERROR_MESSAGE } from "@/utils/appConstants";
import { getEthPriceFromKraken } from "@/services/remote/getEthPriceFromKraken";
import { getGasInfoFromRemote } from "@/services/remote/getGasInfoFromRemote";

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(): Promise<Response> {
    const responseHeaders = {
        headers: { "content-type": "application/json" },
    };

    return Promise.all([
        getGasInfoFromRemote(),
        getEthPriceFromKraken(),
    ]).then(([gasInfo, ethPrice]) => {
        if (!gasInfo || !ethPrice) {
            return new Response(JSON.stringify({ error: API_ERROR_MESSAGE }), responseHeaders);
        }

        return new Response(JSON.stringify({ gasInfo, ethPrice }), responseHeaders);
    }).catch((e: any) => {
        console.error("GAS INFO API ERROR: ", e);
        return new Response(JSON.stringify({ error: API_ERROR_MESSAGE }), responseHeaders);
    });
}
