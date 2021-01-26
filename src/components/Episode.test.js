import React from "react"
import Episodes from "./Episodes"
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Renders without errors', ()=> {
 
 const { rerender}   =  render(<Episodes episodes={[]}/>);


const episodeData =[
{
    "src": "favicon.ico",
    "sizes": "64x64 32x32 24x24 16x16",
    "type": "image/x-icon"
  },
  {
    "src": "logo192.png",
    "type": "image/png",
    "sizes": "192x192"
  },
  {
    "src": "logo512.png",
    "type": "image/png",
    "sizes": "512x512"
  },
]
  

  rerender(<Episodes episodes={episodeData}/>);

  const episode = getAllByTestId(/episodes/i)
  expect(episode).toHaveLength(3)
});