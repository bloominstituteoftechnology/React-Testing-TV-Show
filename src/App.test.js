import userEvent from "@testing-library/user-event";

userEvent.click(getByText(/select a season/i));
debug();


//can use userEvent on onClick functions as well!
//uperEvent.type => will simulate user inputting seomthing by typing