import React from "react";
import {render,screen, waitFor} from "@testing-library/react"
import App from "./App"

test ("app renders without errors",  () => {
    render(<App />)
})

test ("image appears on the screen",async () => {
    render(<App />)


    

 await waitFor(() => expect( screen.getByTestId(/image/i)))

})

