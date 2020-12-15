import React from 'react';
import {fireEvent, screen, render, rerender} from '@testing-library/react';
import App from '../App'
import Episodes from '../components/Episodes'
import {fetchShow as mockFetchShow} from '../api/fetchShow'

jest.mock('../api/fetchShow')

const episodes = [{
        "id": 553946,
        "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "type": "regular",
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
}]

test('initial render', () => {
    mockFetchShow.mockResolvedValueOnce({
     
            episodes: {
                "name": "Chapter One: The Vanishing of Will Byers",
                "season": 1,
                "number": 1
            }
    })
    render(<App/>)
})

test('fetchShow has been called',  () =>{
    // const {rerender} = render(<Episodes episodes={[]}/>)
        mockFetchShow.mockResolvedValueOnce({
        
            episodes: {
                "name": "Chapter One: The Vanishing of Will Byers",
                "season": 1,
                "number": 1
            }
        })
    render(<App/>)
    rerender(<Episodes episodes={episodes}/>)

    const dropdown = screen.queryAllByTestId('dropdown')
    // dropdown.values='season 1'
    // expect(dropdown.values).toBe('season 1')
    fireEvent.click(dropdown)
    expect(episodes).toHaveLength(1)

    // expect(fetchShow).toHaveBeenCalled
    
    

})