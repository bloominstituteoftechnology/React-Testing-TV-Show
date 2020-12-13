import React from 'react'
import App from './App'
// import {render, getByTestId } from '@testing-library/react'
// import {userEvent} from '@testing-library/user-event'
import * as rtl from '@testing-library/react'



test('Data displays from the API', async () => {
    let myApp = rtl.render(<App />);
    const text = await myApp.findByText('Select a season');
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
});



