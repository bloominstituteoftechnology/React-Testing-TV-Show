import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/mockFetchShow");
console.log(mockFetchShow);

const shows = {
    data: [{
        name: 'NAme',
        id: "10101010"
    }]
}

test("App renders correctly", async () => {
	mockFetchMissions.mockResolvedValueOnce(shows);

	// const button = getByText(/Select a season/i);
	// fireEvent.click(button);

    const { getByText } = render(<App />);
    
	getByText(/Fetching data.../i);
});

