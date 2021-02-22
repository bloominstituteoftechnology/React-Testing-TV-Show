import React from "react";
import {render,screen} from "@testing-library/react"
import App from "./App"

test ("app renders without errors",  () => {
    render(<App />)
})

test ("image appears on the screen",  () => {
    render(<App />)

  expect(screen.findAllByTestId(/image/i))

})

test()
