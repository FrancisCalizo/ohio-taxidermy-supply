import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faPortrait } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import AuthLayout from 'components/layout/AuthLayout';
import { useAuth } from 'components/AuthContext';
import { useSignupContext } from 'components/layout/AuthLayout';

type FormValues = {
  email: string;
  password: string;
};

export default function Signup() {
  const { user } = useAuth();
  const router = useRouter();
  const { setSignupForm } = useSignupContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  type SignupType = 'influencer' | 'client';

  const [signupType, setSignupType] = useState<SignupType>(router.query.signupType as SignupType);

  useEffect(() => {
    setSignupType((router.query.signupType as SignupType) || 'influencer');
  }, [router.query.signupType]);

  const onSubmit = (data: FormValues) => {
    const { email, password } = data;
    // TODO: Check to see if email used is already signed up

    // TODO: Hash password

    // If email is valid and not used, move on to next step in process
    setSignupForm((old: any) => ({ ...old, email, password }));
    router.push('/signup/step1');
  };

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  return (
    <MainContainer>
      <h1 className="register-title">
        Register as an <span style={{ textTransform: 'capitalize' }}>{signupType}</span>
      </h1>

      <FlexContainer>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <Input
              type="password"
              id="password"
              placeholder="Password"
              {...register('password', { required: 'This field is required' })}
            />
            {errors.password && <InputErrorMessage>{errors.password.message}</InputErrorMessage>}

            <SignupButton type="submit" disabled={isSubmitting} isSubmitting={isSubmitting}>
              Signup
            </SignupButton>
          </form>

          <Link href="/">
            <BackHome>Back to Home Page</BackHome>
          </Link>
        </div>
        <VerticalLine />
        <InfoContainer>
          <IconCircle>
            <FontAwesomeIcon
              icon={signupType === 'influencer' ? faUserTie : faPortrait}
              style={{ fontSize: 24 }}
            />
          </IconCircle>
          <h3>Are you {signupType === 'influencer' ? 'a Client/Sponser' : 'an Influencer'}?</h3>
          <button
            onClick={() =>
              router.push(
                `/signup?signupType=${signupType === 'influencer' ? 'client' : 'influencer'}`
              )
            }
          >
            Register here
          </button>
          <p style={{ marginTop: '1.5rem !important' }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Already have an account? <Link href="/signup">Login Here</Link>
          </p>
        </InfoContainer>
      </FlexContainer>
    </MainContainer>
  );
}

Signup.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

const InputErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: 12px;
  width: 100%;
  max-width: 300px;
  margin: -0.75rem auto 0;
`;

const MainContainer = styled.div`
  & .register-title {
    text-align: center;
    margin: 0 0 2rem;
    color: rgba(0, 0, 0, 0.6);
    font-size: 30px;
    font-weight: 600;

    @media (max-width: 630px) {
      font-size: 24px;
      margin-bottom: 0.5rem;
    }
  }
`;

const VerticalLine = styled.div`
  height: 200px;
  border-right: 2px dashed lightgray;
  width: 1px !important;
  margin: 0 20px;

  @media (max-width: 630px) {
    display: none;
  }
`;

const IconCircle = styled.div`
  border: 2px solid pink;
  display: inline-block;
  padding: 0.4rem 0.5rem;
  border-radius: 50px;
  color: pink;
  margin-bottom: 0.25rem;
`;

const InfoContainer = styled.div`
  text-align: center;

  h3 {
    margin: 0.25rem 0 0.5rem;
    color: rgba(0, 0, 0, 0.6);
  }

  button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme.colors.pink};
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: ${(props) => darken(0.1, props.theme.colors.pink)} !important;
    }
  }

  & > p {
    margin: 2rem 0 !important;
    color: rgba(0, 0, 0, 0.7) !important;
    font-size: 20px !important;
    font-weight: 600;

    & > a {
      display: block;
      color: ${(props) => props.theme.colors.pink};
      cursor: pointer;
      font-size: 16px;
      font-weight: 400 !important;
      text-decoration: none !important;
      margin-top: 8px;

      &:hover {
        color: ${(props) => darken(0.1, props.theme.colors.pink)} !important;
      }
    }
  }

  @media (max-width: 630px) {
    margin-top: 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  & > div {
    width: 50%;

    @media (max-width: 630px) {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  display: block;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: ${(props) => props.theme.input.padding};
  margin: 1rem auto;
  width: 100%;
  max-width: 300px;
  border: 1px solid lightgray;
  border-radius: 4px;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}
`;

const SignupButton = styled.button<{ isSubmitting?: boolean }>`
  display: block;
  font-size: 18px;
  padding: 0.5rem;
  margin: 2.5rem auto;
  width: 100%;
  max-width: 300px;
  color: #fff;
  background: ${(props) => (props.isSubmitting ? 'lightgray' : props.theme.colors.pink)};
  border: 1px solid rgba(180, 180, 180, 0.8);
  box-shadow: ${(props) => props.theme.button.boxShadow};
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px;
  cursor: ${(props) => (props.isSubmitting ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${(props) =>
      props.isSubmitting ? 'lightgray' : darken(0.03, props.theme.colors.pink)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)}
`;

const BackHome = styled.a`
  color: ${(props) => props.theme.colors.teal};
  cursor: pointer;
  text-decoration: underline;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  display: block;
  width: 100%;

  &:hover {
    color: ${(props) => darken(0.1, props.theme.colors.teal)} !important;
  }
`;
