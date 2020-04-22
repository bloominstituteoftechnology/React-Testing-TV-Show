import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import  { fetchShow as mockFetchShow } from "./api/fetchShow";


import App from "./App";

jest.mock("./api/fetchShow");

test("App fetches show data and renders it", async () => {
    const mockData = { 
        id: '123',
        image: { medium: 'medium_image'},
        name: 'name',
        season: 3,
        number: 2,
        summary: '<p>Summary</p>',
        runtime: 20
    }
    mockFetchShow.mockResolvedValueOnce(mockData);
    const { queryAllByText } = render(<App />);
    await waitFor(() =>expect(queryAllByText(/name/i)).toHaveLength(1));
})