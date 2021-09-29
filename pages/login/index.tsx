import React, { useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthContext';

export default function Login() {
  const { isShowSuccessfulReg, setIsShowSuccessfulReg, user, TEMP_LOGIN } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // TODO: Use AuthContext to handle user auth
    // login(email, password);
    setIsShowSuccessfulReg(false);
    TEMP_LOGIN();
    router.push('/dashboard');
  };

  // If user, bypass this login page
  if (user) {
    setIsShowSuccessfulReg(false);
    router.push('/dashboard');
  }

  return (
    <MainContainer>
      <LoginBlockContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LogoContainer>
            <Image src={`/images/logo.png`} alt="logo" width={55} height={55} quality={50} />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              className="title"
              style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}
              onClick={() => {
                setIsShowSuccessfulReg(false);
                router.push('/');
              }}
              role="button"
              tabIndex={0}
            >
              <span>Cast</span>
              <span>Me</span>
              <span>App</span>
            </div>
          </LogoContainer>
        </div>

        <h1>Log In</h1>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?{' '}
          <Link href="/signup?signupType=influencer">
            <a>
              <Signup>Sign Up</Signup>
            </a>
          </Link>
        </p>

        {isShowSuccessfulReg && (
          <p className="success">Registration Successful. Please login to continue</p>
        )}

        <Input
          type="text"
          id="login"
          name="login"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginButton type="submit" onClick={handleSubmit}>
          Login
        </LoginButton>

        <Link href="/" passHref>
          <BackHome onClick={() => setIsShowSuccessfulReg(false)}>Back to Home Page</BackHome>
        </Link>
      </LoginBlockContainer>
    </MainContainer>
  );
}

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
  max-width: 500px;
  border-radius: 5px;
  max-height: 600px;
  padding: 3rem 2rem 5rem;
  margin: 0 2rem;

  h1 {
    text-align: center;
    margin: 0;
    color: rgba(0, 0, 0, 0.6);
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

    &.success {
      max-width: 350px;
      margin: -1.5rem auto 1.5rem;
      background: ${({ theme }) => theme.colors.green};
      padding: 0.75rem 0;
      border-radius: 4px;
    }
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

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.pink))}
`;

const LoginButton = styled.button`
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

    @media (max-width: 600px) {
      font-size: 22px;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const Signup = styled.a`
  color: ${(props) => props.theme.colors.teal};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${(props) => darken(0.1, props.theme.colors.teal)} !important;
  }
`;

const BackHome = styled(Signup)`
  text-decoration: underline;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  display: block;
  width: 100%;
`;
