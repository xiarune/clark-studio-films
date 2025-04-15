import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/background-home.jpg';

const PageWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 100vh;
  padding: 5rem 2rem;
  font-family: 'Georgia', serif;
`;

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto 3rem auto;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SectionParagraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #ccc;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  font-family: 'Inter', sans-serif;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  resize: vertical;
  width: 100%;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-family: 'Georgia', serif;
  font-weight: bold;
  border: none;
  background-color: white;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

const Error = styled.span`
  font-size: 0.85rem;
  color: #ff4f4f;
`;

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    const phoneRegex = /^[0-9]{10}$/;

    if (!form.firstName.trim()) errs.firstName = 'First name is required.';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required.';
    if (!form.email.includes('@')) errs.email = 'Enter a valid email.';
    if (!phoneRegex.test(form.phone)) errs.phone = 'Enter a 10-digit phone number.';
    if (!form.message.trim()) errs.message = 'Message cannot be empty.';
    if (form.honeypot !== '') errs.honeypot = 'Spam detected.';

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    console.log('Form submitted:', form);
    alert('Message sent!');
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      honeypot: '',
    });
    setErrors({});
  };

  return (
    <PageWrapper>
      <Section>
        <SectionTitle>Disclaimer</SectionTitle>
        <SectionParagraph>
        CSF is a non-profit effort. All music used is not being used for monetization. 
        This  applies to every project mentioned. Copyright Disclaimer Under Section 107 
        of the Copyright Act 1976, allowance is made for "fair use" for purposes such as 
        criticism, comment, news reporting, teaching, scholarship, and research. 
        Fair use is a use permitted by copyright statute that might otherwise be infringing. 
        Non-profit, educational or personal use tips the balance in favor of fair use. 
        No copyright infringement intended. All rights to the respective owners.
        </SectionParagraph>

        <SectionTitle>Tools of the Trade</SectionTitle>
        <SectionParagraph>
        Editor: Davinci Resolve <br></br>
        Camera: Canon EOS 60D Photography <br></br>
        Editor: Adobe Photoshop
        </SectionParagraph>
      </Section>

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="firstName">First Name:</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <Error>{errors.firstName}</Error>}
          </div>

          <div>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <Error>{errors.lastName}</Error>}
          </div>

          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </div>

          <div>
            <Label htmlFor="phone">Phone:</Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="e.g., 5551234567"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <Error>{errors.phone}</Error>}
          </div>

          <div>
            <Label htmlFor="message">Message:</Label>
            <Textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <Error>{errors.message}</Error>}
          </div>

          {/* Honeypot field */}
          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
          />

          <div style={{ textAlign: 'center' }}>
            <SubmitButton type="submit">Send</SubmitButton>
          </div>
        </Form>
      </Section>
    </PageWrapper>
  );
}







