"use client";

import { TEXT_CARD_PROPOSED, TEXT_CARD_QUICK, TEXT_CARD_SAFE } from "@/utils/appConstants";
import { useEffect, useState } from "react"

import { InfoAlert } from "../InfoAlert";
import { InfoCard } from "../InfoCard"
import { PriceIcon } from "../icons/PriceIcon";
import { ProposedIcon } from "../icons/ProposedIcon"
import { QuickIcon } from "../icons/QuickIcon"
import { SafeIcon } from "../icons/SafeIcon"
import { TInfoCardContainerProps } from "./InfoCardContainer.types"
import { getGasInfo } from "@/services/local/getGasInfo"

export const InfoCardContainer = ({
    gasInfoResponse
}: TInfoCardContainerProps) => {
    const [gasInfo, setGasInfo] = useState(gasInfoResponse.gasInfo)
    const [ethPrice, setEthPrice] = useState(gasInfoResponse.ethPrice)

    useEffect(() => {
        let counter = 0

        const theInterval = setInterval(() => {
            counter++
            if (counter === 1) {
                return
            }

            getGasInfo()
                .then((data) => {
                    setGasInfo(data.gasInfo);
                    setEthPrice(data.ethPrice);
                })
        }, 10000)

        return () => clearInterval(theInterval)
    }, [])

    const calculateFeeInEth = (gasFee: number) => {
        // 1 gwei = 0.000000001 eth
        // we assume a transfer takes 21000 gas
        // so 21000 * 0.000000001 = 0.000021
        return gasFee * ethPrice * 0.000021
    }

    const priceText = (gasFee: number) => {
        return `${gasFee} gwei - $${calculateFeeInEth(gasFee).toFixed(2)}`
    }

    const iconClassName = "w-7 h-7 text-gray-500 dark:text-gray-400 mb-3 justify-self-center"

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4">
                <InfoCard
                    icon={<SafeIcon className={iconClassName} />}
                    title="Safe"
                    price={priceText(gasInfo.SafeGasPrice)}
                    content={TEXT_CARD_SAFE}
                />
                <InfoCard
                    icon={<ProposedIcon className={iconClassName} />}
                    title="Proposed"
                    price={priceText(gasInfo.ProposeGasPrice)}
                    content={TEXT_CARD_PROPOSED}
                />
                <InfoCard
                    icon={<QuickIcon className={iconClassName} />}
                    title="Quick"
                    price={priceText(gasInfo.FastGasPrice)}
                    content={TEXT_CARD_QUICK}
                />
            </div>
            <div className="flex flex-1 flex-col">
                <InfoAlert
                    title="Ethereum Price:"
                    description={`$${ethPrice}`}
                    icon={<PriceIcon className={`w-5 h-5 text-gray-500 dark:text-gray-400`} />}
                />
            </div>
        </>
    )
}