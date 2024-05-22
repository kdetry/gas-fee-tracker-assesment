import { TInfoAlertProps } from "./InfoAlert.types";

export const InfoAlert = ({
    title,
    description,
    icon
}: TInfoAlertProps) =>
    <div className="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        {icon}
        <div data-testid="info-alert-content">
            <span className="font-medium">{title}</span> {description}
        </div>
    </div>