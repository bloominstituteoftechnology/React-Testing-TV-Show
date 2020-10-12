import React from 'react';
import { render, screen } from "@testing-library/react";
import Episodes from './Episodes';


describe('Getting Episodes Tests', ()=>{
    test('renders without errors', ()=>{
        render(<Episodes episodes={[]}/>)
    });

    test('renders episode data', ()=>{
        const newEpisodes = [{episode_id:"578664", episode_name:"Chapter One: The Vanishing of Will Byers"}, {episode_id:"578663", episode_name:"Chapter Two: The Weirdo on Maple Street"}];

        const { rerender } = render(<Episodes episodes={[]}/>);
        expect(screen.queryAllByTestId('episode')).toStrictEqual([]);

        rerender(<Episodes episodes={newEpisodes}/>);

        expect(screen.queryAllByTestId('episode')).toHaveLength(2);
    });
});