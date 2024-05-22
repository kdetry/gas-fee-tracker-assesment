import React from "react"
import { TInfoCardProps } from "./InfoCard.types"

export const InfoCard = ({
    icon,
    title,
    price,
    content
}: TInfoCardProps) =>
    <div className="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span className="flex justify-center items-center flex-col" data-testid="icon-title-wrapper">{icon} {title}</span>
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" data-testid="info-card-price">{price}</h5>
        </a>
        <p className="mb-3 text-xs font-normal text-gray-500 dark:text-gray-400" data-testid="info-card-content">{content}</p>
    </div>
