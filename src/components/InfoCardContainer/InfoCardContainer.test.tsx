import { TEXT_CARD_PROPOSED, TEXT_CARD_QUICK, TEXT_CARD_SAFE } from "@/utils/appConstants";
import { render, screen } from "@testing-library/react";

import { InfoCardContainer } from "./InfoCardContainer";

const testGasInfoResponse = {
    "gasInfo": {
        "LastBlock": 19905903,
        "SafeGasPrice": 8,
        "ProposeGasPrice": 8,
        "FastGasPrice": 11,
        "suggestBaseFee": 3.078723705
    },
    "ethPrice": 3071.44
}


describe('Page', () => {
    it('renders a component and updates prices based on async data', async () => {
        render(<InfoCardContainer gasInfoResponse={testGasInfoResponse} />);

        const iconTitleWrapper = screen.getAllByTestId('icon-title-wrapper');
        expect(iconTitleWrapper).toHaveLength(3);
        expect(iconTitleWrapper[0]).toHaveTextContent('Safe');
        expect(iconTitleWrapper[1]).toHaveTextContent('Proposed');
        expect(iconTitleWrapper[2]).toHaveTextContent('Quick');

        const infoCardPrice = screen.getAllByTestId('info-card-price');
        expect(infoCardPrice).toHaveLength(3);
        expect(infoCardPrice[0]).toHaveTextContent('8 gwei - $0.52');
        expect(infoCardPrice[1]).toHaveTextContent('8 gwei - $0.52');
        expect(infoCardPrice[2]).toHaveTextContent('11 gwei - $0.71');

        const infoCardContent = screen.getAllByTestId('info-card-content');
        expect(infoCardContent).toHaveLength(3);
        expect(infoCardContent[0]).toHaveTextContent(TEXT_CARD_SAFE);
        expect(infoCardContent[1]).toHaveTextContent(TEXT_CARD_PROPOSED);
        expect(infoCardContent[2]).toHaveTextContent(TEXT_CARD_QUICK);
    });
});
