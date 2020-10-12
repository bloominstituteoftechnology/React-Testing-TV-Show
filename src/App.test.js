import React from 'react'
import {screen, render, fireEvent, wait} from '@testing-library/react'
import App from './App'

describe('App.js tests', () => {
    test('renders without errors', () => {
        render(<App />)
    })
})