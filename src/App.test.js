import React from 'react';
import { render, screen } from '@testing-library/react';

//App component
import App from './App';

test('Render app without a problem', () => {
	render(<App />);
});
