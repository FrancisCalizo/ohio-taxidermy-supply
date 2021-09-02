import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faPortrait } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import AuthLayout from 'components/layout/AuthLayout';
import { useAuth } from 'components/AuthContext';

export default function Step1() {
  const { user, TEMP_LOGIN } = useAuth();
  const router = useRouter();

  type SignupStep = 'none' | 'step1' | 'step2';

  const [signupStep, setSignupStep] = useState<SignupStep>('none');

  const handleSubmit = () => {
    console.log('blah');
  };

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  return (
    <MainContainer>
      <BodyContainer>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h2>Welcome. Let's Begin!</h2>
        <h5>Please provide the following information</h5>

        <div className="form-container">
          <div className="name-row">
            <Input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              id="gender"
              name="gender"
              placeholder="Gender"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="target-row">
            <Input
              type="text"
              id="target-demographic"
              name="target-demographic"
              placeholder="Target Demographic"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              id="target-media"
              name="target-media"
              placeholder="Target Media"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="first-address-row">
            <Input
              type="text"
              id="address-one"
              name="address-one"
              placeholder="Address"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              id="address-two"
              name="address-two"
              placeholder="Address #2 (Optional)"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </BodyContainer>
    </MainContainer>
  );
}

Step1.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

const MainContainer = styled.div``;

const BodyContainer = styled.div`
  & h2 {
    text-align: center;
    margin: -1rem 0 0;
    color: ${(props) => props.theme.colors.gray};
  }

  & h5 {
    text-align: center;
    margin: 1rem 0 2rem;
    /* color: ${(props) => props.theme.colors.gray}; */
  }

  .form-container {
    .name-row {
      display: grid;
      grid-template-columns: 4fr 4fr 2fr;
      column-gap: 1rem;
    }

    .target-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }

    .first-address-row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 1rem;
    }
  }
`;

const Input = styled.input`
  display: block;
  font-size: ${(props) => props.theme.input.fontSize};
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}
`;

const SignupButton = styled.button`
  display: block;
  font-size: 18px;
  padding: 0.5rem;
  margin: 2.5rem auto;
  width: 100%;
  max-width: 300px;
  color: #fff;
  background: ${(props) => props.theme.colors.pink};
  border: 1px solid rgba(180, 180, 180, 0.8);
  box-shadow: ${(props) => props.theme.button.boxShadow};
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: ${(props) => darken(0.03, props.theme.colors.pink)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.pink)}
`;
