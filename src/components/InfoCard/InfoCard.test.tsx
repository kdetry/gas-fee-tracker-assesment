import { render, screen } from "@testing-library/react";

import { InfoCard } from "./InfoCard";

describe('Page', () => {
    it('renders a component', () => {
        render(
            <InfoCard
                title="test title"
                price="test price"
                icon={<div data-testid="test-icon">test icon</div>}
                content="test content"
            />
        );


        const iconAndTitle = screen.getByTestId('icon-title-wrapper');
        expect(iconAndTitle).toHaveTextContent('test title');
        expect(iconAndTitle).toHaveTextContent('test icon');

        const icon = screen.getByTestId('test-icon');
        expect(icon).toHaveTextContent('test icon');

        const content = screen.getByTestId('info-card-content');
        expect(content).toHaveTextContent('test content');

        const price = screen.getByTestId('info-card-price');
        expect(price).toHaveTextContent('test price');
    })
})