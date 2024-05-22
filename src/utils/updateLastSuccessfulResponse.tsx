import { Maybe } from "./typeHelpers";
import { promises as fs } from "fs";

export type TUpdateLastSuccessfulResponse = {
    data: string;
    path: string;
    renewPeriod: Maybe<number>;
};

export const updateLastSuccessfulResponse = async ({
    data,
    path,
    renewPeriod,
}: TUpdateLastSuccessfulResponse): Promise<void> =>
    fs
        .stat(path)
        .then((stats) => {
            if (!stats || !stats.mtimeMs || (
                stats.mtimeMs < Date.now() - (renewPeriod ?? 0))) {
                fs.writeFile(path, data);
            }
        })
        .catch(() =>
            console.log("updateLastSuccessfulResponse: Error writing to file")
        );
