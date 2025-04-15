// src/pages/Contact.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '../assets/images/background-home.jpg';

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const PageWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 5rem 2rem;
  color: white;
  font-family: 'Georgia', serif;
`;

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  margin-bottom: 1.5rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  min-height: 120px;
  margin-bottom: 1.5rem;
`;

const HiddenField = styled.input`
  display: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${props => (props.error ? 'red' : 'lightgreen')};
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '', honeypot: ''
  });
  const [status, setStatus] = useState('');

  const validateEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = phone =>
    /^\+?[0-9\s()-]{7,15}$/.test(phone);

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      setStatus('Invalid phone number.');
      return;
    }

    setStatus('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', honeypot: '' });
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Title>Contact</Title>
        <Form onSubmit={handleSubmit}>
          <HiddenField
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
            aria-hidden="true"
            tabIndex="-1"
            autoComplete="off"
          />
          <InputRow>
            <Input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </InputRow>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            type="tel"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
          <TextArea
            placeholder="Your message..."
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button type="submit">Send Message</Button>
          {status && <Message error={status.startsWith('Please') || status.startsWith('Invalid')}>{status}</Message>}
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
}




