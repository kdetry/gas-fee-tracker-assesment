import { TGasInfo } from "../remote/getGasInfoFromRemote";
import { appGasInfoUrl } from "@/utils/apiConstants";
import { fetchApi } from "@/utils/fetchApi";

export type TGasInfoResponse = {
  gasInfo: TGasInfo;
  ethPrice: number;
};

export const getGasInfo = async (): Promise<TGasInfoResponse> =>
  fetchApi({ url: appGasInfoUrl() }).catch((err) => {
    console.log(err);
  });
