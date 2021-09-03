import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import AuthLayout from 'components/layout/AuthLayout';
import { useAuth } from 'components/AuthContext';

export default function Step1() {
  const { user } = useAuth();
  const router = useRouter();

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
        <h2>Time to connect!</h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h5>Please provide the account handles of all social media platforms you'd like to use</h5>

        <div className="form-container">
          <InputContainer>
            <div className="input-group">
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 30, color: 'gray' }} />
            </div>
            <Input
              type="text"
              id="twitter"
              name="twitter"
              placeholder="@"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <div className="input-group">
              <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 30, color: 'gray' }} />
            </div>
            <Input
              type="text"
              id="facebook"
              name="facebook"
              placeholder="www.facebook.com/"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <div className="input-group">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30, color: 'gray' }} />
            </div>
            <Input
              type="text"
              id="instagram"
              name="instagram"
              placeholder="@"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <div className="input-group">
              <FontAwesomeIcon icon={faTiktok} style={{ fontSize: 30, color: 'gray' }} />
            </div>
            <Input
              type="text"
              id="tik-tok"
              name="tik-tok"
              placeholder="@"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <div className="input-group">
              <FontAwesomeIcon icon={faYoutube} style={{ fontSize: 24, color: 'gray' }} />
            </div>
            <Input
              type="text"
              id="youtube"
              name="youtube"
              placeholder="@"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          <RegisterButton>Register</RegisterButton>
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
    margin: 1rem auto 2rem;
    max-width: 420px;
  }

  .form-container {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  .input-group {
    border: 1px solid black;
    height: 42px;
    border-radius: 4px 0 0 4px;
    border-right: none;
    border-color: lightgray;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
  }
`;

const Input = styled.input`
  display: block;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 0 4px 4px 0;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}
`;

const RegisterButton = styled.button`
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
