import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { InfoAlert } from './InfoAlert'

describe('Page', () => {
  it('renders a heading', () => {
    const { container } = render(<InfoAlert title="test title" description="test description" icon={<div data-testid="test-icon">test icon</div>} />);

 
    const theSpan = container.querySelector('span.font-medium');
    expect(theSpan).toHaveTextContent('test title');

    const content = screen.getByTestId('info-alert-content');
    expect(content).toHaveTextContent('test title');

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveTextContent('test icon');
  })
})