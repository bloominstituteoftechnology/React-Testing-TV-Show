import React from 'react';
import Episodes from "./Episodes" // Make sure to include the component your trying to test
import {fireEvent, render, screen,wait} from '@testing-library/react';



describe("Episodes Renders Tests", ()=>{
    const mockEpisodes = [
        {   
            season:5, 
            number:12,
            summary:"Sweet Sauce", 
            runtime:54,
            id:2,  
            image:{
                medium:"http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg", 
                },
            name:"Zigg's Bombs"
        }
    ]   
    const mockEpisodesNoImage = [
        {   
            season:5, 
            number:12,
            summary:"Sweet Sauce", 
            runtime:54,
            id:2,  
            name:"Zigg's Bombs"
        }
    ]

    test('render without errors, no data passed', () =>{
        render(<Episodes episodes={[]}/>);
    });
    test("render with mock episodes to see if it loads with mock data", () =>{
        render(<Episodes episodes={mockEpisodes}/>)//Renders with complete data
        expect(screen.queryAllByTestId('episode')).toHaveLength(1)

    })
     test("render with mock episodes to see if it loads with no data and then mock data", () =>{
        const {rerender} =render(<Episodes episodes={[]}/>)//Renders with no data
        expect(screen.queryAllByTestId('episode')).toHaveLength(0)  // Shows nothing is displayed with zero data
        rerender(<Episodes episodes={mockEpisodes}/>) // Renders with one piece of data passed into it
        expect(screen.queryAllByTestId('episode')).toHaveLength(1)// shows our mock data is now being displayed through map
    })
   test("render with mock episodes to see if it loads with mock incomplete data", () =>{
        render(<Episodes episodes={mockEpisodesNoImage}/>)// Renders without Image
   })

})  
