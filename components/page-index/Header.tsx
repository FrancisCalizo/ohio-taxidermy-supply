import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faSearchDollar,
  faCalendarAlt,
  faGlobeAmericas,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <ImageContainer>
        <Image
          src={'/images/header.png'}
          alt="header"
          layout="fixed"
          width={380}
          height={200}
          quality={95}
        />
      </ImageContainer>

      <MainText>
        A place where Talent Creates, Clients hire, Consumers are entertained and all opportunities
        can be Cast to the right match for the Experience and Vending opportunity for Brand
        Awareness and Talent Platform monetization. CastMeApp is the world of opportunity, bridging
        the gap between Talent and Client without wasted hours of false data or long contracts
        commiting you to something that may not work out.
        <br />
        <br />
        With CastMeApp clients can track performance and Talent can be themselves, authentically
        creating and landing in front of the right opportunity. Through CastMeApp we bring to
        surface the ability to hire the right ambassadors for the job, we empower Talent to business
        their platform as an advertising space to help share the brands they love with the world and
        above all, we partner with companies, experiences and brands all over the world to raise
        awareness the global market to our fingertips.
      </MainText>

      <Line />

      <SubText>
        <h2 className="main">Are you Ready?</h2>
        <h3 className="secondary">Click an option below to learn more</h3>
      </SubText>

      <IconsContainer>
        {ICONS.map((icon, key) => (
          <Icon key={key} role="button" tabIndex={0}>
            <div>
              <FontAwesomeIcon
                icon={icon.icon}
                style={{ fontSize: 36, color: 'rgb(52, 52, 52)' }}
              />
            </div>
            <div>
              <span>{icon.title}</span>
            </div>
          </Icon>
        ))}
      </IconsContainer>
    </div>
  );
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const MainText = styled.h1`
  font-size: calc(18px + (24 - 18) * ((100vw - 400px) / (1800 - 400)));
  color: ${(props) => props.theme.colors.gray};
  padding: 2rem 0;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const SubText = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.gray};

  .main {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: black;
  }

  .secondary {
    font-size: 1rem;
    margin: 0;
  }
`;

const Line = styled.div`
  height: 3px;
  background: ${(props) => props.theme.colors.pink};
  max-width: 700px;
  margin: 0 auto;
  box-shadow: ${(props) => `0 3px 2px -1px ${props.theme.colors.purple}`};
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: center;
  max-width: 600px;
  margin: 2rem auto 0;
  padding-bottom: 1.5rem;
`;

const Icon = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }

  & > div:nth-child(1) {
    background: white;
    margin: 0.5rem;
    padding: 1.4rem 1.4rem;
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.colors.purple};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
    transition: all 300ms ease-in-out;
  }

  & div:nth-child(2) {
    display: flex;
    justify-content: center;

    & > span {
      color: white;
      text-align: center;
      background: ${(props) => props.theme.colors.teal};
      padding: 1px 5px;
      border: 1px solid ${(props) => props.theme.colors.pink};
      border-radius: 5px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
      transform: translateY(-20px);
      transition: all 300ms ease-in-out;
    }
  }
`;

const ICONS = [
  { title: 'Talent', icon: faSearchDollar },
  { title: 'Clients', icon: faUserCircle },
  { title: 'Events', icon: faCalendarAlt },
  { title: 'Vendors', icon: faBuilding },
  { title: 'Travel', icon: faGlobeAmericas },
];
