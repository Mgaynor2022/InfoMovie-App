import { render, screen } from "@testing-library/react";
import App from "../../App";
import { test } from "vitest";

test("renders LandingPage link", ()=>{
    render( <App />)
    const linkElement = screen.getByText(/LandingPage/i); // This is how you find the element
    expect(linkElement).toBeInTheDocument()
    
});