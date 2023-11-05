import { render } from '@testing-library/react';
import App from './App';

test('should be true', () => {
    expect(true).toBe(true);
});

test('Title should be "Vite + React"', () => {
    const { getByText } = render(<App />);
    const title = getByText(/Vite \+ React/i);
    expect(title).toBeInTheDocument();
})