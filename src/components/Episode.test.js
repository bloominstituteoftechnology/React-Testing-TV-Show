import React from 'react';
import Episodes from './Episodes.js';
import { render, getAllByTestId } from '@testing-library/react';


test('Episode list shows data when new season is called', () => {
    //Arrange
    
    const { queryAllByTestId, getAllByTestId, rerender } = render(< Episodes episodes={[]} />);
    //make sure there are nos episodes when component mounts.
    const initialEpisodes = queryAllByTestId(/episodes/i)
    expect(initialEpisodes).toHaveLength(0);
    expect(initialEpisodes).toEqual([]);
    // console.log(initialEpisodes);
    
        //Act
    
        //Assert
}); 