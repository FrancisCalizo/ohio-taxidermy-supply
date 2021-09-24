import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function IconButtonSection() {
  const router = useRouter();

  return (
    <MainContainer>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <SectionTitle>Get Started</SectionTitle>

      <Underline />

      <IconsContainer>
        {BUTTONS.map((icon, key) => (
          <Icon
            key={key}
            variant={icon.title as any}
            role="button"
            tabIndex={0}
            onClick={() => router.push(icon.route)}
          >
            <div>
              <Image
                src={`/images/${icon.icon}`}
                layout="fixed"
                width={70}
                height={70}
                quality={80}
              />
            </div>
            <div>
              <span>{icon.title}</span>
            </div>
          </Icon>
        ))}
      </IconsContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  margin-top: -3px;
  padding: 1rem 0;
  border-top: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 3px solid ${({ theme }) => theme.colors.orange};
`;

const Underline = styled.hr`
  width: 220px;
  height: 5px;
  background: white;
  margin: 0 auto 1rem;
  border: 1px solid ${({ theme }) => theme.colors.orange};
`;

const SectionTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.colors.orange};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  letter-spacing: -2px;
  padding: 2rem 0 0.5rem;
  margin: 0;
`;

const IconsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 1.5rem;
`;

const Icon = styled.div<{ variant: 'Taxidermist' | 'Hunter' }>`
  margin: 0 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    & div:nth-child(2) {
      & > span {
        background: ${({ theme, variant }) =>
          variant === 'Taxidermist'
            ? darken(0.08, theme.colors.orange)
            : darken(0.08, theme.colors.brown)};
      }
    }
  }

  & > div:nth-child(1) {
    background: white;
    margin: 0.5rem;
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.colors.dark};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
    transition: all 300ms ease-in-out;
    padding: 1rem 1rem 0.85rem 0.9rem;
  }

  & div:nth-child(2) {
    display: flex;
    justify-content: center;

    & > span {
      width: 120px;
      color: white;
      text-align: center;
      background: ${({ theme, variant }) =>
        variant === 'Taxidermist' ? theme.colors.orange : theme.colors.brown};
      padding: 0.75rem 1rem;
      border: 0.5px solid white;
      border-radius: 6px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
      transform: translateY(-20px);
      transition: all 300ms ease-in-out;
    }
  }
`;

const BUTTONS = [
  { title: 'Taxidermist', icon: 'taxidermy-icon.jpg', route: '/taxidermist' },
  { title: 'Hunter', icon: 'hunter-icon.jpg', route: '/hunter' },
];
