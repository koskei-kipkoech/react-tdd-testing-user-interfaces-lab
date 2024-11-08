// App.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Patrick Kipkoech`", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm patrick kipkoech/i,
    });
    expect(topLevelHeading).toBeInTheDocument();
    });

    test("displays an image with alt text `My Profile`", () => {
    render(<App />);
    const image = screen.getByAltText("My Profile");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "images/me.png");
    });

    test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
    const secondLevelHeading = screen.getByRole("heading", { name: /about me/i });
    expect(secondLevelHeading).toBeInTheDocument();
    });

    test("displays a paragraph for the biography", () => {
    render(<App />);
    const biography = screen.getByText(/i am a passionate software developer/i);
    expect(biography).toBeInTheDocument();
    });

    test("includes a link to the GitHub page", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/koskei-kipkoech");
    });

    test("includes a link to the LinkedIn page", () => {
    render(<App />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/patrick-kipkoech");
});
