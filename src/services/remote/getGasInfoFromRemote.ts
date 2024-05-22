import { etherscanGasTrackerUrl } from "@/utils/apiConstants";
import { fetchApi } from "@/utils/fetchApi";

const parseGasInfo = (gasInfo: Record<string, string>) => {
    return {
        LastBlock: parseInt(gasInfo.LastBlock),
        SafeGasPrice: parseInt(gasInfo.SafeGasPrice),
        ProposeGasPrice: parseInt(gasInfo.ProposeGasPrice),
        FastGasPrice: parseInt(gasInfo.FastGasPrice),
        suggestBaseFee: parseFloat(gasInfo.suggestBaseFee),
    };
};

export type TGasInfo = {
    LastBlock: number;
    SafeGasPrice: number;
    ProposeGasPrice: number;
    FastGasPrice: number;
    suggestBaseFee: number;
};

export const getGasInfoFromRemote = async (): Promise<TGasInfo> =>
    fetchApi({ url: etherscanGasTrackerUrl(process.env.API_KEY as string) })
        .then((data) => parseGasInfo(data.result))
        .catch((err) => err);