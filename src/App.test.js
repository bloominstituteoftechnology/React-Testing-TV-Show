import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


test("renders without erros", () => {
    render(<App/>);
})

