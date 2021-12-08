import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';

export default function Taxidermist() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('taxidermist/login');
  };

  return (
    <div>
      <Banner>
        <h1>Taxidermist</h1>
      </Banner>

      <Container>
        <h1 style={{ textAlign: 'center' }}>Coming soon!</h1>

        <div className="login-container">
          <p className="small-text">Already have a Taxidermist account with us?</p>
          <div className="login-button-container">
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </div>

        <Hr />

        <div className="login-container">
          <h2 className="section-ready">Ready to create a Taxidermist profile?</h2>
          <div className="login-button-container">
            <Link href="/taxidermist/signup">
              <Button variant="outline">Create Profile</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Banner = styled.div`
  height: 40vh;
  background-image: url('/images/deer-on-wall.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0.6;
  }

  h1 {
    color: white;
    font-size: calc(32px + (54 - 32) * ((100vw) / (1200 - 300)));
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  padding: 0.5rem 2rem 2rem;
  margin: 0 auto;

  .login-container {
    text-align: center;

    p.small-text {
      font-size: calc(12px + (16 - 12) * ((100vw - 400px) / (1800 - 400)));
      color: ${({ theme }) => theme.colors.gray};
    }

    .login-button-container {
      margin: 0 auto;
      width: 150px;
    }
  }

  .section-ready {
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.dark};
    text-align: center;
    font-size: 2rem;
    letter-spacing: -2px;
    margin: 3rem auto 1rem;
  }
`;

const Hr = styled.hr`
  max-width: 500px;
  margin: 2rem auto;
  height: 5px;
  background: ${({ theme }) => theme.colors.brown};
`;

const Button = styled.button<{ variant?: 'outline' }>`
  display: block;
  width: 100%;
  background: ${({ theme, variant }) => (variant === 'outline' ? '#fff' : theme.colors.orange)};
  color: ${({ theme, variant }) => (variant === 'outline' ? theme.colors.orange : '#fff')};
  border: 0.5px solid
    ${({ theme, variant }) => (variant === 'outline' ? theme.colors.orange : '#fff')};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${({ theme }) => darken(0.05, theme.colors.orange)};
    color: ${({ variant }) => variant === 'outline' && '#fff'};
  }

  &:hover:not(#submit-button) {
    transform: scale(1.02);
  }

  ${(props) => props.theme.global.setFocus('#fff')}
`;

Taxidermist.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
