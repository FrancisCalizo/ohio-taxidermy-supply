import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function AuthLayout({ children }: any) {
  const router = useRouter();

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
        {children}
      </LoginBlockContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-height: 100vh;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1000px;
  border-radius: 5px;
  max-height: 700px;
  padding: 1rem 2rem 2.5rem;
  margin: 0 3rem;
  overflow-y: auto;

  @media (max-width: 630px) {
    padding: 1.5rem 2rem 1.5rem;
    max-height: none;
    margin: 2rem;
  }
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
  }

  &:hover {
    cursor: pointer;
  }
`;
