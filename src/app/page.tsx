import { InfoCardContainer } from "@/components/InfoCardContainer";
import { getGasInfo } from "@/services/local/getGasInfo";

export default async function Home() {

    const gasInfoResponse = await getGasInfo();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24 gap-4">
            {gasInfoResponse && (
                <InfoCardContainer gasInfoResponse={gasInfoResponse} />
            )}
        </main>
    );
}
