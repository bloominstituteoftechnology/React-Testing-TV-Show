import React from "react";
import {getByTitle, render,screen, wait, waitFor} from "@testing-library/react"
import App from "./App"

test ("app renders without errors",  () => {
    render(<App />)
})

test ("image,H1 appears on the screen",async () => {
 const{debug} =  render(<App />)

 const h1 = waitFor(() =>expect(screen.findByTitle("Stranger Things")))

 const image = waitFor(() => expect( screen.getByTestId(/image/i)))
 const paragraph = waitFor(() => expect(screen.getByRole("paragraph")))


  expect(image).toBeTruthy()
  expect(h1).toBeTruthy()
  expect(paragraph).toBeTruthy()


})

