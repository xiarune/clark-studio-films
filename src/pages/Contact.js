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

const ContentBox = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 3rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'Inter', sans-serif;
  color: #ccc;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  margin-bottom: 1.8rem;
  color: #ddd;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
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
    if (form.honeypot) return; // Anti-spam honeypot field

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
      {/* Disclaimer + Tools Section */}
      <ContentBox>
        <SectionTitle>Disclaimer</SectionTitle>
        <Paragraph>
          This is a student portfolio. All content is for demonstration purposes only. Films, images, and details belong to their respective creators. No commercial intent is associated.
        </Paragraph>

        <SectionTitle>Tools of Trade</SectionTitle>
        <Paragraph>
          This portfolio uses React.js and Styled Components to build a modular and responsive experience. Assets are locally managed, and image grids are custom-configured to preserve quality and structure.
        </Paragraph>
      </ContentBox>

      {/* Contact Form Section */}
      <ContentBox>
        <SectionTitle>Contact Us</SectionTitle>
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

          {/* Honeypot field (hidden from users) */}
          <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} style={{ display: 'none' }} />

          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </ContentBox>
    </PageWrapper>
  );
}






