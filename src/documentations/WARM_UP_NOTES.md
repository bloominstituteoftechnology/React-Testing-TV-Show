**TEST REACT COMPONENTS AS PROPS CHANGE**

- rerender() - Allows developer to test data being passed as props as well as props changes that may occur in a component. It is used when setting up a test for use AFTER the prop for the component has been updated

**Initial setup EXAMPLE of rerender usage**

// name test
const testValuePhone = "2025550113"

test("entering an invalid value shows an error message", () => { //test is a function that contains two arguments, message, func
const { getByLabelText, getByRole, rerender } = render( // pull in testing properties - add rerender and debug
<PhoneNumber /> //wrap component in render function
);
const input = getByLabelText(/favorite number/i); // grab your item by it's label
fireEvent.change(input, { target: { value: testValuePhone } }); // update prop
expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i); // test component
rerender(<PhoneNumber phoneNumber={testValuePhone} />); // test prop updates
});

using this block of code the test will fail and show an error message the user inputs a number. then it will pass.

in this case queryByRoll('or any queryBy assertion') will return null instead of error. This allows a search for something that isn't supposed to be in the DOM. it also allows us to use .toBeNull as an expectation as well as toBeFalsy()

in the above code the following changes handle this new logic..

const {getByLabelText, getByRole, queryByRole, rerender} = render( // bring in queryBy in addition to the previous
<PhoneNumber />
);
const input = getByLabelText(/favorite number/i); //no change
expect(getByRole("alert")).toHaveTextContent(/the number is invalid/i); //no change
rerender(<PhoneNumber phoneNumber={"2025550113"} />); //rerender moves up
expect(queryByRole('alert')).toBeNull(); //queryByRole is called expecting not to see an alert. test will fail if one shows up.

this is another example simulating getting info from an api call

//import libraries
import React from "react";
import { render } from "@testing-library/react";
import DoggoImages from "./DoggoImages";

test("renders dog images from API", () => {
const doggoUrls = [
'url-one.jpg', 'url-two.jpeg', 'url-three.jpg'
]
const { getAllByTestId, rerender } = render(<DoggoImages images={[]} />);

expect(getAllByTestId(/doggo images/i)).toHaveLength(0);

// We will rerender the component with our dummy data passed in as the new props
rerender(<DoggoImages images={doggoUrls} />);

// Assert that we now have dog images rendering!
expect(getAllByTestId(/doggo images/i)).toHaveLength(3);
});

**USE MOCKS IN WEB APPLICATION TESTING**

A function in testing may have inconvenient dependencies on other objects. To isolate the behavior of the function, it's often desirable to replace the other objects with mocks that simulate the behavior of the real objects. Replacing objects is especially useful if the real objects are impractical to incorporate into the unit test.

Another use of mocks is as "spies" because they let us spy on the behavior of a function that is called by some other code. Mock functions can keep track of calls to the function, as well as the parameters passed in those calls. We can even define an implementation for the mock, but that's optional. Simpler mocks that implement only enough behavior to execute test code are sometimes called "stubs".

import uuid from "uuid";

export const makeUser = (firstName, lastName) => {
return {
id: uuid(),
fullName: `${firstName} ${lastName}`
};
};

import { makeUser } from "../utils/makeUser";
jest.mock("uuid", () => () => "abcde");
test("generates a user with an id and a full name", () => {
// Arrange
const expected = { id: "abcde", fullName: "Peter Parker" }; // fishy...

     // Act
     const actual = makeUser("Peter", "Parker");

     // Assert
     expect(actual).toEqual(expected);

});

this is called a unit test - a test for a single unity of code like an isolated function like makeUser.

**TEST ASYNC API CALLS THAT ARE MADE IN A COMPONENT**

Async Testing - is a test that doesn't complete right away. it awaits the results of one or more async operations. THis is especially useful in API testing as standard testing will not work as expected.

waitFor() from '@testing-library/react' allows the developer to tell the test to wait for an async call to finish before casting judgement.

jest.mock() function will be used to make mocks of the async functions so that we won't have to wait for the actual call to be made

**PROBLEM**

We have a component fetching data from Dog.ceo api. when the user pushed the fetch doggos button the component uses function fetchDoggos to make the api call. To make testing easier, refactor this component into a directory of /api to be created in the file structure.

**To start**

**Bring in imports needed to handle this logic**

import React from 'react',
import { render, fireEvent, waitFor } from '@testing-library/react'
import { fetchDoggos as mockFetchDoggos } from '../api/fetchDoggos'
import Doggos from './Doggos"

**Also SET UP TEST**

test('renders dog images from API', async () => {});

**MOCK THE ASYNC FUNCTION**

mock is created before and outside of the testing block to mock the fetchDoggos async function.

import React from 'react',
import { render, fireEvent, waitFor } from '@testing-library/react'
import { fetchDoggos as mockFetchDoggos } from '../api/fetchDoggos'
import Doggos from './Doggos"

jest.mock('../api/fetchDoggos') //jest is called in to the game to mock the fetchDoggos

**Inside the test function mock function tell it what data should be resolved**

test('renders dog images from API', async () => {

    //mock results are resolved
    mockFetchDoggos.mockResolvedValueOnce({
        message: [
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
        ]
    })

});

**Render Query and fireEvent**

**render the component next and create a fireEvent to simulate button click**

const ( getByText ) = render(<Doggos />);
const fetchDoggosButton = getByText(/fetch doggos/i);
fireEvent.click(fetchDoggosButton);

this goes inside the testing block but outside of the mock


test('renders dog images from API', async () => {

    //mock results are resolved
    mockFetchDoggos.mockResolvedValueOnce({
        message: [
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
        ]
    })

    const ( getByText ) = render(<Doggos />);
    const fetchDoggosButton = getByText(/fetch doggos/i);
    fireEvent.click(fetchDoggosButton);

});

**ASYNC/ AWAIT**

we have now successfully made our async call. We need to tell the test that it is going to handle an async function by adding async right after the test name string but before the function using standard async/ await 

test('renders dog images from API', async () => {

    //mock results are resolved
    mockFetchDoggos.mockResolvedValueOnce({
        message: [
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
        ]
    })

    const ( getByText ) = render(<Doggos />);
    const fetchDoggosButton = getByText(/fetch doggos/i);
    fireEvent.click(fetchDoggosButton);
    //Our shiny new await/ waitFor logic line
    await waitFor(() => expect(getAllByTestId(/doggo-images/i)).toHaveLength(3))

});

**HOME STRETCH**

Finally we make sure the correct function was called by adding an extra assertion

expect(mockFetchDoggos).toHaveBeenCalledTimes(1);

