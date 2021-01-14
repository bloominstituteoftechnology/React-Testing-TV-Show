import App from "./App";
import {render} from "@testing-library/react";

// Sample Data 

const show = {   	
id: 2993,
url: "http://www.tvmaze.com/shows/2993/stranger-things",
name: "Stranger Things",
type: "Scripted",
language: "English",
genres: {	
0: "Drama",
1: "Fantasy",
2: "Science-Fiction",
},
status: "Running",
runtime: 60,
premiered: "2016-07-15",
officialSite: "https://www.netflix.com/title/80057281",
}


test('the imported data is correct', () => {
    expect(App).toMatchSnapshot();
});

// Mocking test 
test('mock implementation of a basic function', () => {
    const mock = jest.fn(() => "I am a mock function");
    console.log(mock);
    expect(mock('Calling my mock function!')).toBe("I am a mock function");
    expect(mock).toHaveBeenCalledWith('Calling my mock function!');
});

test("Runs and renders App", () => {
    const test = render(<App />)
    screen.debug()
})

