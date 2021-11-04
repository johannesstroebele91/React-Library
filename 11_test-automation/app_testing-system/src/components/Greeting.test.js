import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Greeting from "./Greeting";

// Describe defines a category of tests
// So e.g. one test suite can have multiple tests
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // e.g. click a button
    // here its nothing

    // Assert
    // Look into virtual dom and look of the search element is there
    // screen.get() // throw an error if an element is not found
    // screen.query() // check if the element is NOT found - so it should NOT be found - returns null if not found
    // screen.find() // return an error if an element is found
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    // screen.getByText(/hello world/i); // regular expression
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  // IMPORTANT TO TEST FOR ERRORS!!!
  test('does not render "good to see your" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
