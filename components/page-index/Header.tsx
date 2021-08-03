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

import useWindowResize from 'components/hooks/useWindowResize';

const WIDTHS = {
  sm: 500,
  md: 768,
  lg: 1024,
};

export default function Header() {
  const [windowWidth] = useWindowResize();

  return (
    <div style={{ padding: '0 2rem', position: 'relative', overflowX: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 500,
          top: windowWidth > WIDTHS.sm ? '0px' : '200px',
          right: '-100px',
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#DBE3F0"
            d="M25.1,-43.9C33.4,-33.6,41.8,-28.3,49.4,-20.1C57,-11.9,63.7,-0.9,66,12.1C68.2,25.2,66,40.2,56.4,46C46.9,51.8,30.1,48.5,16.1,50.6C2.1,52.8,-9,60.6,-22.2,62.6C-35.4,64.6,-50.7,60.9,-55.7,50.7C-60.7,40.6,-55.3,23.9,-53.9,9.9C-52.6,-4,-55.2,-15.2,-52.2,-24.7C-49.2,-34.1,-40.5,-41.8,-30.8,-51.5C-21.2,-61.3,-10.6,-73.1,-1.1,-71.4C8.3,-69.6,16.7,-54.3,25.1,-43.9Z"
            transform="translate(150 50)"
          />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          top: windowWidth > WIDTHS.md ? '-100px' : windowWidth > WIDTHS.md ? '200px' : '600px',
          right: '100px',
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill=" #d1f2fa"
            d="M56.6,-18.8C61.5,-3.2,45.5,18.7,24.5,34.1C3.5,49.4,-22.6,58.2,-41.6,46.8C-60.6,35.5,-72.5,4,-64.4,-16C-56.3,-35.9,-28.2,-44.4,-1.2,-44C25.9,-43.6,51.7,-34.4,56.6,-18.8Z"
            transform="translate(100 50)"
          />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          top: windowWidth > WIDTHS.md ? '0px' : windowWidth > WIDTHS.md ? '250px' : '300px',
          right: windowWidth > WIDTHS.sm ? '0px' : '-250px',
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F4D7E0"
            d="M46.4,-73.6C58.1,-64.7,64.2,-48.4,69.7,-32.8C75.3,-17.3,80.4,-2.5,78.2,11.1C76.1,24.7,66.7,37.2,56.5,49C46.3,60.9,35.4,72.1,21.2,79.8C6.9,87.5,-10.6,91.7,-24.6,86.5C-38.7,81.2,-49.1,66.4,-60.5,52.7C-71.9,39.1,-84.3,26.5,-87.3,11.9C-90.4,-2.6,-84.2,-19.1,-76,-33.7C-67.7,-48.2,-57.5,-60.9,-44.5,-69.2C-31.5,-77.5,-15.7,-81.5,0.8,-82.8C17.4,-84.1,34.7,-82.5,46.4,-73.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          top: '0px',
          left: windowWidth > WIDTHS.sm ? '0px' : '-200px',
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f9f1d2"
            d="M43.1,-60.2C56.3,-49.7,67.9,-37.7,72.7,-23.5C77.5,-9.2,75.6,7.4,70.4,22.7C65.2,38.1,56.8,52.3,44.5,63.9C32.2,75.4,16.1,84.3,0.7,83.4C-14.7,82.4,-29.5,71.6,-44.7,61C-59.8,50.4,-75.5,40,-80.1,26C-84.6,12,-78.2,-5.7,-71.3,-22.1C-64.5,-38.5,-57.3,-53.7,-45.3,-64.7C-33.4,-75.7,-16.7,-82.4,-0.9,-81.2C14.9,-80,29.8,-70.8,43.1,-60.2Z"
            transform="translate(40 60)"
          />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 600,
          top: windowWidth > WIDTHS.md ? '0px' : '-180px',
          left: '0px',
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#CEE4D9"
            d="M40.8,-35.7C56.6,-25.1,75.7,-12.5,77.8,2.1C79.9,16.8,65.2,33.6,49.4,48.3C33.6,63,16.8,75.6,3.9,71.7C-9,67.8,-18.1,47.5,-26.6,32.8C-35.2,18.1,-43.2,9,-48.4,-5.2C-53.6,-19.4,-55.9,-38.8,-47.4,-49.5C-38.8,-60.1,-19.4,-62,-3.4,-58.5C12.5,-55.1,25.1,-46.3,40.8,-35.7Z"
            transform="translate(100 50)"
          />
        </svg>
      </div>

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
        <div>
          A place where Talent Creates, Clients hire, Consumers are entertained and all
          opportunities can be Cast to the right match for the Experience and Vending opportunity
          for Brand Awareness and Talent Platform monetization. CastMeApp is the world of
          opportunity, bridging the gap between Talent and Client without wasted hours of false data
          or long contracts commiting you to something that may not work out.
        </div>
        <div>
          With CastMeApp clients can track performance and Talent can be themselves, authentically
          creating and landing in front of the right opportunity. Through CastMeApp we bring to
          surface the ability to hire the right ambassadors for the job, we empower Talent to
          business their platform as an advertising space to help share the brands they love with
          the world and above all, we partner with companies, experiences and brands all over the
          world to raise awareness the global market to our fingertips.
        </div>
      </MainText>

      <Line />

      <SubText>
        <h2 className="main">Are you Ready?</h2>
        <h3 className="secondary">Click an option below to learn more</h3>
      </SubText>

      <IconsContainer>
        {ICONS.map((icon, key) => (
          <Icon key={key} role="button" tabIndex={0} onClick={() => console.log('On Click')}>
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
  font-size: calc(18px + (22 - 18) * ((100vw - 400px) / (1800 - 400)));
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  div {
    background: rgba(255, 255, 255, 0.2);
  }

  div:nth-child(1) {
    padding: 2rem 1rem 0;
  }
  div:nth-child(2) {
    padding: 2rem 1rem 2rem;
  }
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
  margin: 1rem auto 0;
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
