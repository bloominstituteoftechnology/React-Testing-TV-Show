import React from 'react'
import App from '../App';
import Episodes from './Episodes'
import {render} from '@testing-library/react'


// test ('tests Episode renders', () => {
//     render(<Episodes episodes={[]}/>)
// })

describe('tests component',() => {
test('tests Episode items render', () => {

    const {queryAllByTestId} = render(<Episodes episodes={[]}/>)

    expect(queryAllByTestId('episodes')).toHaveLength(0)
    expect(queryAllByTestId('episodes')).toStrictEqual([])

})
})