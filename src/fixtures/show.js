

export const mockData = {
    image: { 
        original: 'logo192.png' 
    },
    name:'episode',
    summary:'summary',
    season: 'season',
    _embedded: {
        episodes: [
            {
                id:'episode',
                image: {
                medium: 'logo192.png'
                },
                name:'episode',
                number:'number',
                summary:'summary',
                runtime:'runtime',
                season: 'season' 
            },
            {
                id:'episode2',
                image: {
                medium: 'logo192.png'
                },
                name:'episode',
                number:'number',
                summary:'summary',
                runtime:'runtime',
                season: 'season' 
            }
        ]  
    }
}


export const mockShow = [
    {
        id:'episode',
        image: {
        medium: 'logo192.png'
        },
        name:'episode',
        number:'number',
        summary:'summary',
        runtime:'runtime',
        season: 'season' 

    },
    {
        id:'episode2',
        image: {
        medium: 'logo192.png'
        },
        name:'episode',
        number:'number',
        summary:'summary',
        runtime:'runtime',
        season: 'season' 

    }
] 
