import fetchShow from "./fetchShow";
import {render} from "@react-testing-library";

test("I know what I am doing", () => {
    expect(0).toEqual(1)
    // Fails because I am clueless
})

test("That app loads with correct data", () => {
    expect(fetchShow).toMatchSnapshot();
});

test("That I can even do something as basic and simple as loading the darned screen successfully", () => {
    render(<fetchShow />)
})

// welp this is absolutely it. I hate testing and its clear testing hates me. Please fail me for this project. I will spend the next 4 weeks studying react testing. I will make sure that i know how to do it. I just can not do it at this time and I am frustrating myself beyond belief even trying. People say react testing is easy. Not for me....