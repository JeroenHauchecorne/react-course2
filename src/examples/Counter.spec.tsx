import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for extended matchers

const Counter = () => {
    const [count, setCount] = React.useState(5);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <>
        <div>Count: {count}</div>
        <button onClick={handleClick}> click me </button>
      </>
    );
  };
  

describe("Counter Component", () => {
  test("renders the initial count and increments on button click", () => {

    // Render the Counter component
    render(<Counter />);

    const countDisplay = screen.getByText(/Count: 5/i);
    expect(countDisplay).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(button);

    expect(screen.getByText(/Count: 6/i)).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByText(/Count: 7/i)).toBeInTheDocument();
  });
});


