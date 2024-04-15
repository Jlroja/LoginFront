import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './src/LoginForm/loginform.jsx'; 


describe('LoginForm', () => {
  it('contains a text input for the username', () => {
    render(<LoginForm />);
    const usernameInput = screen.getByPlaceholderText('Username');
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute('type', 'text');
  });
});
