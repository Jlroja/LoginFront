import { describe } from "vitest";
import ErrorMessage from "./ErrorMessage";
import { render, screen } from "@testing-library/react";

describe("ErrorMessage", () => {
    it('renders default error state', () => {
        render(<ErrorMessage/>);
        expect(screen.getByTestId('message-container'))
        .toHaveTextContent('Something went wrong');
    });

    it('renders default error state', () => {
        render(<ErrorMessage message="Email is already taken"/>);
        expect(screen.getByTestId('message-container'))
        .toHaveTextContent('Email is already taken');
    });
});