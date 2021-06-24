import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from 'components/AuthContext';

export default function Login() {
  const { user, TEMP_LOGIN } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <LogoContainer>
          <Image src={`/circle-gradient.png`} alt="logo" width={30} height={30} quality={50} />
          <div style={{ marginLeft: 10, fontFamily: 'Shadows Into Light' }}>CastMeApp</div>
        </LogoContainer>

        <h1>Sign In</h1>

        <Input
          type="text"
          id="login"
          name="login"
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

        <LoginButton type="submit" onClick={handleSubmit}>
          Login
        </LoginButton>
      </LoginBlockContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: url('https://global-uploads.webflow.com/5e60b5966f0e682e9f8fd42b/5e62700fdbb4cf1199775586_bg.svg');
  background-size: cover;
  background-repeat: repeat-y;
  background-position: 50% 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBlockContainer = styled.div`
  background-color: #e20046;
  width: 100%;
  max-width: 700px;
  border-radius: 2px;
  max-height: 600px;
  padding: 5rem 2rem;
  border: 1px solid black;
  margin: 0 1rem;

  h1 {
    text-align: center;
    margin: 0 0 1rem 0;
    color: #fff;
  }
`;

const Input = styled.input`
  display: block;
  font-size: 18px;
  padding: 0.5rem;
  margin: 1rem auto;
  width: 100%;
  max-width: 300px;
  border: 1px solid lightgray;
`;

const LoginButton = styled.button`
  display: block;
  font-size: 18px;
  padding: 0.5rem;
  margin: 2.5rem auto;
  width: 100%;
  max-width: 300px;
  border: 2px solid #998a00;
  background: #ffe400;
  text-transform: uppercase;
  font-weight: 700;
`;

const LogoContainer = styled.h4`
  display: flex !important;
  justify-content: center;
  align-items: center;
  background: #000;
  text-transform: lowercase;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  border: 1px solid #990030;
  width: 210px;
  font-size: 20px;
  margin: 0 auto 1rem;
`;
