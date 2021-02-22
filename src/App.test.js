import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App"





// //mock function to be passed to component

// test("App fires loading text on mounting", async () => {
//     const { rerender } = render(<App />)

//     // check that mount triggers a loading state while useEffect runs
//     await waitFor(async() => {
//         expect(await screen.queryByText(/fetching data/i)).toBeInTheDocument();
//     })

// })