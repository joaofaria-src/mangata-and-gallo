const React = require('react');
const { render, fireEvent, waitFor, act } = require('@testing-library/react');
const Contact = require('./components/Contact').default;

describe('Contact Component', () => {
  it('renders contact form with inputs and submit button', () => {
    const { getByLabelText, getByText } = render(<Contact />);

    // Check if name input is rendered
    const nameInput = getByLabelText(/Name:/i);
    expect(nameInput).toBeInTheDocument();

    // Check if email input is rendered
    const emailInput = getByLabelText(/Email:/i);
    expect(emailInput).toBeInTheDocument();

    // Check if message textarea is rendered
    const messageTextarea = getByLabelText(/Message:/i);
    expect(messageTextarea).toBeInTheDocument();

    // Check if submit button is rendered
    const submitButton = getByText(/Send Message/i);
    expect(submitButton).toBeInTheDocument();
  });

  it('updates state when input values change', () => {
    const { getByLabelText } = render(<Contact />);

    // Simulate user input for name field
    const nameInput = getByLabelText(/Name:/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    // Simulate user input for email field
    const emailInput = getByLabelText(/Email:/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');

    // Simulate user input for message field
    const messageTextarea = getByLabelText(/Message:/i);
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });
    expect(messageTextarea.value).toBe('Test message');
  });

  it('submits form with valid data', async () => {
    const { getByLabelText, getByText } = render(<Contact />);

    // Simulate user input for form fields
    fireEvent.change(getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText(/Message:/i), { target: { value: 'Test message' } });

    // Simulate form submission
    await act(async () => {
      fireEvent.click(getByText(/Send Message/i));
    });
  });
});
