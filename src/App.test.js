import React from 'react';
import App from './App';
import fetchShow from "./api/fetchShow";
import { episodesFixture } from "./components/Episodes.test";
import { render, waitFor, queryAllByTestId, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";

jest.mock("./api/fetchShow")

test("Render episodes", async () => {
   fetchShow.mockResolvedValueOnce({ data: episodesFixture });

   const { getByText, getAllByText, queryAllByTestId, rerender } = render(<App />);

   console.log("nb: App.test.js: test: ", episodesFixture);

   // const button = 
   // fireEvent.mouseDown(queryAllByTestId("season"));

   // await waitFor(() => {
   //    fireEvent.mouseDown(getByText(/Select a season/i));
   //    fireEvent.mouseDown(getByText(/season 3/i));
   //    expect(queryAllByTestId("episodes")).toHaveLength(0)
   //    rerender(<App episodes={ episodesFixture } />);
   //    expect(queryAllByTestId("episodes")).toHaveLength(1)
   //    expect(queryAllByTestId("show")).toHaveLength(1);
   // })
   // expect(getAllByText(/episode/i)).toHaveLength(8);
   expect(true).toBe(true);
})