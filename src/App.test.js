import React from 'react'
import {render} from '@testing-library/react'
import App from './App'
import {fetchShow} from './api/fetchShow'


test("App Renders", () => {
    render(<App/>)
})

jest.mock('./api/fetchShow')