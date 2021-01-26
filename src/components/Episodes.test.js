import React from 'react';
import { render, screen, } from '@testing-library/react';
import Episodes from './Episodes';

test('renders without errors', () =>{
    render(<Episodes episodes={[]} />);
});

const testSeason = [
    {
        id: 1,
        name: 'Episode 1',
        image:{
            medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg'
        },
        number: 1,
        runtime: 60,
        season: 1,
        summary: 'Details about the events occuring in this episode'
    },
    {
        id: 2,
        name: 'Episode 2',
        image:{
            medium: '"http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg'
        },
        number: 2,
        runtime: 60,
        season: 1,
        summary: 'Details about the events occuring in this episode'
    },
    {
    id: 3,
    name: 'Episode 3',
    image:{
    medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg'
    },
    number: 3,
    runtime: 60,
    season: 1,
    summary: 'Details about the events occuring in this episode'
    }
];

const testSeason2 = [
    {
        id: 1,
        name: 'Episode 1',
        image:{
            medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg'
        },
        number: 1,
        runtime: 60,
        season: 1,
        summary: 'Details about the events occuring in this episode'
    },
    {
        id: 2,
        name: 'Episode 2',
        image:{
            medium: '"http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg'
        },
        number: 2,
        runtime: 60,
        season: 1,
        summary: 'Details about the events occuring in this episode'
    },
    {
    id: 3,
    name: 'Episode 3',
    image:{
    medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg'
    },
    number: 3,
    runtime: 60,
    season: 1,
    summary: 'Details about the events occuring in this episode'
    }
]
    

test('Episodes change when different season is picked', () =>{
    const { rerender } = render(<Episodes episodes={testSeason} />);
    const ep1= screen.getByText('Episode 1');
    const ep2= screen.getByText('Episode 2');
    const ep3= screen.getByText('Episode 3');

    expect(ep1).toBeInTheDocument();
    expect(ep2).toBeInTheDocument();
    expect(ep3).toBeInTheDocument();

    rerender(<Episodes episodes={testSeason2} />)

    const s2Ep1= screen.getByText('Episode 1');
    const s2Ep2= screen.getByText('Episode 2');
    const s2Ep3= screen.getByText('Episode 3');

    expect(s2Ep1).toBeInTheDocument();
    expect(s2Ep2).toBeInTheDocument();
    expect(s2Ep3).toBeInTheDocument();

})

