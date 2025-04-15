// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/background-home.jpg';

const PageWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  color: white;
  font-family: 'Georgia', serif;
  padding: 5rem 2rem;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 3rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'Inter', sans-serif;
  color: #ccc;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  margin-bottom: 1.5rem;
  color: #ddd;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  border-radius: 5px;
  border: none;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  border-radius: 5px;
  border: none;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-family: 'Georgia', serif;
  background-color: white;
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const Error = styled.span`
  color: #ff6b6b;
  font-size: 0.9rem;
`;

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!/^\d{10}$/.test(form.phone.replace(/[^0-9]/g, ''))) newErrors.phone = 'Valid 10-digit phone number required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (form.honeypot) return; // Bot detected

    if (Object.keys(newErrors).length === 0) {
      alert('Message sent!');
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '', honeypot: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <PageWrapper>
      <Overlay>
        <SectionTitle>Disclaimer</SectionTitle>
        <Paragraph>
        CSF is a non-profit effort. All music used is not being used for monetization. 
        This  applies to every project mentioned. Copyright Disclaimer Under Section 107 
        of the Copyright Act 1976, allowance is made for "fair use" for purposes such as 
        criticism, comment, news reporting, teaching, scholarship, and research. 
        Fair use is a use permitted by copyright statute that might otherwise be infringing. 
        Non-profit, educational or personal use tips the balance in favor of fair use. 
        No copyright infringement intended. All rights to the respective owners.
        </Paragraph>

        <SectionTitle>Tools of Trade</SectionTitle>
        <Paragraph>
        Editor: Davinci Resolve <br></br>
        Camera: Canon EOS 60D Photography <br></br>
        Editor: Adobe Photoshop
        </Paragraph>

        <Form onSubmit={handleSubmit}>
          <Label>
            First Name:
            <Input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
            {errors.firstName && <Error>{errors.firstName}</Error>}
          </Label>

          <Label>
            Last Name:
            <Input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
            {errors.lastName && <Error>{errors.lastName}</Error>}
          </Label>

          <Label>
            Email:
            <Input type="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <Error>{errors.email}</Error>}
          </Label>

          <Label>
            Phone:
            <Input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g., 5551234567" />
            {errors.phone && <Error>{errors.phone}</Error>}
          </Label>

          <Label>
            Message:
            <Textarea rows="5" name="message" value={form.message} onChange={handleChange} />
            {errors.message && <Error>{errors.message}</Error>}
          </Label>

          {/* Honeypot field (invisible to users) */}
          <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} style={{ display: 'none' }} />

          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </Overlay>
    </PageWrapper>
  );
}





