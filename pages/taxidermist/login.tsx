import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';

type FormValues = {
  email: string;
  password: string;
};

export default function TaxidermistLogin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('data', data);

    router.push('/taxidermist/dashboard');
  };

  return (
    <div>
      <Container>
        <FormContainer>
          <div className="title-container">
            <h2 className="section-title">Taxidermist Login</h2>

            <p className="login_p1">Don't have an account?</p>
            <p className="login_p2">
              Click <Link href="/taxidermist/signup">here</Link> to sign up.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid-container">
              <div className="input-container">
                <Input
                  type="text"
                  id="company"
                  placeholder="Email"
                  {...register('email', { required: 'This field is required' })}
                />
                {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
              </div>

              <div className="input-container">
                <Input
                  type="password"
                  id="company"
                  placeholder="Password"
                  {...register('password', { required: 'This field is required' })}
                />
                {errors.password && (
                  <InputErrorMessage>{errors.password.message}</InputErrorMessage>
                )}
              </div>

              <Button id="login-button" disabled={isSubmitting} isSubmitting={isSubmitting}>
                Login
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
  max-width: 600px;
  padding: 2rem;
  margin: 0 auto;

  .login_p1 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 0;
  }

  .login_p2 {
    text-align: center;
    font-size: 14px;
    margin-top: 0.25rem;

    & > a {
      text-decoration: underline;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

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
`;

const FormContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 3rem 2rem 4rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  & .title-container {
    margin-bottom: 3rem;
  }

  & .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;

    @media (max-width: 630px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .input-container,
  #login-button {
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
  margin-top: 2.5rem;

  &:hover {
    background: ${(props) =>
      props.isSubmitting ? 'lightgray' : darken(0.05, props.theme.colors.brown)};
  }

  &:hover:not(#login-button) {
    transform: scale(1.02);
  }

  ${(props) => props.theme.global.setFocus('#fff')}
`;

TaxidermistLogin.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
