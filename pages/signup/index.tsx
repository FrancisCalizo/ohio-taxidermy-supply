import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faPortrait } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthContext';

export default function Signup() {
  const { user, TEMP_LOGIN } = useAuth();
  const router = useRouter();

  type SignupType = 'influencer' | 'client';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupType, setSignupType] = useState<SignupType>(
    (router.query.signupType as SignupType) || 'influencer'
  );

  useEffect(() => {
    setSignupType(router.query.signupType as SignupType);
  }, [router.query.signupType]);

  const handleSubmit = () => {
    // TODO: Use AuthContext to handle user auth
    // login(username, password);
    TEMP_LOGIN();
    router.push('/dashboard');
  };

  // If user, bypass this login page
  if (user) {
    router.push('/dashboard');
  }

  return (
    <MainContainer>
      <LoginBlockContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LogoContainer onClick={() => router.push('/')}>
            <Image src={`/images/logo.png`} alt="logo" width={55} height={55} quality={50} />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              className="title"
              style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}
              role="button"
              tabIndex={0}
            >
              <span>Cast</span>
              <span>Me</span>
              <span>App</span>
            </div>
          </LogoContainer>
        </div>

        <h1>
          Register as an <span style={{ textTransform: 'capitalize' }}>{signupType}</span>
        </h1>

        <FlexContainer>
          <div>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <SignupButton type="submit" onClick={handleSubmit}>
              Signup
            </SignupButton>

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
      </LoginBlockContainer>
    </MainContainer>
  );
}

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

const MainContainer = styled.div`
  height: 100vh;
  background: hsla(193, 80%, 76%, 1);

  background: linear-gradient(
    315deg,
    hsla(193, 80%, 76%, 1) 0%,
    hsla(230, 35%, 76%, 1) 49%,
    hsla(341, 57%, 84%, 1) 100%
  );

  background: -moz-linear-gradient(
    315deg,
    hsla(193, 80%, 76%, 1) 0%,
    hsla(230, 35%, 76%, 1) 49%,
    hsla(341, 57%, 84%, 1) 100%
  );

  background: -webkit-linear-gradient(
    315deg,
    hsla(193, 80%, 76%, 1) 0%,
    hsla(230, 35%, 76%, 1) 49%,
    hsla(341, 57%, 84%, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBlockContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 1000px;
  border-radius: 5px;
  max-height: 600px;
  padding: 3rem 2rem 5rem;
  margin: 0 1rem;
  overflow-y: scroll;

  h1 {
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

  p {
    font-size: 14px;
    text-align: center;
    margin: 0.7rem 0 3rem 0;
    color: rgba(0, 0, 0, 0.4);

    & > a {
      text-decoration: underline;
      font-size: 15px;
      font-weight: bold;

      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }

  @media (max-width: 630px) {
    padding: 1.5rem 1rem 1.5rem;
    max-height: 800px;
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
  font-size: ${(props) => props.theme.input.fontSize};
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

const LogoContainer = styled.h3`
  text-align: center;
  display: inline-block;
  transform: none;
  border-radius: 100px;

  img {
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
  }

  & .title {
    font-size: 30px;
    margin-top: -0.8rem;

    & > span:nth-child(1) {
      color: ${(props) => props.theme.colors.teal};
    }
    & > span:nth-child(2) {
      color: ${(props) => props.theme.colors.yellow};
    }
    & > span:nth-child(3) {
      color: ${(props) => props.theme.colors.pink};
    }

    @media (max-width: 630px) {
      font-size: 26px;
    }
  }

  &:hover {
    cursor: pointer;
  }
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
