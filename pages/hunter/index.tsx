import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import SiteLayout from 'components/layout/SiteLayout';
import HunterOptionCard from 'components/hunter/HunterOptionCard';

export default function Hunter() {
  return (
    <div>
      <Banner>
        <h1>Hunter</h1>
      </Banner>

      <Container>
        <div className="login-container">
          <p className="small-text">Already have a Hunter account with us?</p>
          <div className="login-button-container">
            <Button>Login</Button>
          </div>
        </div>

        <h2 className="section-title">Your Hunt Is Not Over</h2>
        <h2 className="section-description">
          Now that youve successfully completed your hunt, now its time to start scouting for a
          Taxidermist
        </h2>

        <div className="card-options">
          <HunterOptionCard />
        </div>
      </Container>
    </div>
  );
}

const Banner = styled.div`
  height: 40vh;
  background-image: url('/images/hunter.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 40%;
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
      width: 130px;
    }
  }

  .section-title {
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.dark};
    text-align: center;
    font-size: 2rem;
    letter-spacing: -2px;
    margin: 3rem auto 0.5rem;
  }

  .section-description {
    text-align: center;
    font-size: calc(14px + (18 - 14) * ((100vw - 400px) / (1800 - 400)));
    color: ${({ theme }) => theme.colors.gray};
    margin: 0 auto 3rem;
  }

  .card-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    @media (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 2rem;
    }
  }
`;

const Button = styled.button<{ isSubmitting?: boolean }>`
  display: block;
  width: 100%;
  background: ${({ theme, isSubmitting }) => (isSubmitting ? 'lightgray' : theme.colors.orange)};
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

Hunter.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
