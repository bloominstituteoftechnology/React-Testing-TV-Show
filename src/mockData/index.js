export const episodes = [
    {
        id: 101,
        name: 'chapter 11',
        runtime: 90,
        season: 100,
        number: 11,
        image: { medium: '/first' },
        summary: '<p> just watch it </p>',
    },
    {
        id: 102,
        name: 'chapter 12',
        runtime: 100,
        season: 100,
        number: 12,
        image: { medium: '/second' },
        summary: '<p> do watch it </p>' 
    },
];

export const season = "Season 100";


export const mockData = {
data: {
    name: 'devin',
    image: { original: '/original'},
    summary: '<p> A love note<p>',
    _embedded: {
        episodes: episodes,
    },
},

};