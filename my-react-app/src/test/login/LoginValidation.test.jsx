import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '/src/LoginForm/Loginform'; 


describe('LoginForm', () => {
  it('contains a text input for the username', () => {
    render(<LoginForm />);
    const usernameInput = screen.getByPlaceholderText('Username');
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute('type', 'text');
  });
  it('contains a field input for the password', () => {
    render(<LoginForm />);
    const passInput= screen.getByPlaceholderText('Password');
    expect (passInput).toBeInTheDocument();
    expect(passInput).toHaveAttribute('type', 'password');
  });
});
