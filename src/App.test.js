import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Contact from './Contact';

describe('App Component', () => {
 test('renders navbar links correctly', () => {
    const { getAllByRole } = render(<App />);
    const linkElements = getAllByRole('link', { name: /Home|Gallery|Contact|About/ });
    console.log(linkElements); // Log the link elements to the console
    expect(linkElements.length).toBe(4);
  });

  test('form submission in Contact component', () => {
    render(<Contact />);
    
    // Print out the rendered HTML for inspection
    console.log(screen.debug());
    
    // Find form elements by their labels
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const messageInput = screen.getByLabelText('Message:');
    const submitButton = screen.getByRole('button', { name: /Send Message/i });
  
    // Simulate user input and form submission
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });
    fireEvent.click(submitButton);
  
    // Assert that input fields are cleared after submission
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
  // Additional tests...
});
