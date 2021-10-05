import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function CreateProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };

  return (
    <div>
      <Container>
        <h2 className="section-title">Create Taxidermist Account</h2>
        <p className="desc">Please fill out the form below!</p>

        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid-container">
              <div className="first-name-container">
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  {...register('firstName', { required: 'This field is required' })}
                />
                {errors.firstName && (
                  <InputErrorMessage>{errors.firstName.message}</InputErrorMessage>
                )}
              </div>

              <div className="last-name-container">
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  {...register('lastName', { required: 'This field is required' })}
                />
                {errors.lastName && (
                  <InputErrorMessage>{errors.lastName.message}</InputErrorMessage>
                )}
              </div>

              <div className="email-container">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register('email', {
                    required: 'This field is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Entered value does not match email format',
                    },
                  })}
                />
                {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
              </div>

              <div className="message-container">
                <TextArea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  {...register('message', { required: 'This field is required' })}
                />
                {errors.message && <InputErrorMessage>{errors.message.message}</InputErrorMessage>}
              </div>
              <Button id="submit-button" disabled={isSubmitting} isSubmitting={isSubmitting}>
                Send Message
              </Button>
            </div>
          </form>
        </FormContainer>
      </Container>
    </div>
  );
}

const InputErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: 12px !important;
  width: 100%;
  margin: 0 2px 0;
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;

  p {
    font-size: calc(16px + (20 - 16) * ((100vw - 400px) / (1800 - 400)));
  }

  .section-title {
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.orange};
    text-align: center;
    font-size: 2rem;
    letter-spacing: -1.5px;
    margin: 0;
  }

  .desc {
    text-align: center;
    margin: 0 0 1rem;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const FormContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  & .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 0.75rem;

    @media (max-width: 630px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .email-container,
  .message-container,
  #submit-button {
    grid-column: 1/-1;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 4px;

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.orange))}
`;

const TextArea = styled.textarea<{ rows: number }>`
  width: 100%;
  display: block;
  font-size: ${(props) => props.theme.input.fontSize};
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0;
  border: 1px solid lightgray;
  border-radius: 4px;
  resize: none;

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.orange))}
`;

const Button = styled.button<{ isSubmitting?: boolean }>`
  display: block;
  width: 100%;
  background: ${({ theme, isSubmitting }) => (isSubmitting ? 'lightgray' : theme.colors.brown)};
  color: white;
  border: 0.5px solid white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: ${({ isSubmitting }) => (isSubmitting ? 'not-allowed' : 'pointer')};
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${(props) =>
      props.isSubmitting ? 'lightgray' : darken(0.05, props.theme.colors.brown)};
  }

  &:hover:not(#submit-button) {
    transform: scale(1.02);
  }

  ${(props) => props.theme.global.setFocus('#fff')}
`;

CreateProfile.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
