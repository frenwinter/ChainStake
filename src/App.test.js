// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainStake title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainStake/i);
    expect(titleElement).toBeInTheDocument();
});
