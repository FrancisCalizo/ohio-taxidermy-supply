import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function Header() {
  return (
    <div>
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
        autoplay={true}
        autoplaySpeed={6000}
      >
        {carouselImages.map((num, key) => (
          <Banner key={key} url={num} />
        ))}
      </Slider>
      {/* <TitleBlock>
        <Title>
          <span>
            <span>Cast</span>Me<span>App</span>
          </span>
        </Title>
      </TitleBlock> */}
    </div>
  );
}

const carouselImages = [
  'hunting-scope.jpg',
  'taxidermist-at-work.jpg',
  'hunter-bow.jpg',
  'blood-trail.jpg',
];

const Banner = styled.div<{ url: any }>`
  height: calc(100vh - 350px);
  background-image: ${({ url }) => `url(/images/carousel/${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 10%;
`;

const TitleBlock = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  line-height: calc(100vh - 100px);
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: calc(48px + (100 - 48) * ((100vw) / (1200 - 300)));
  transform: skewX(-20deg);
  transform: rotate(-15deg);
  color: #fff;
  font-family: Shadows Into Light;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  & > span {
    padding: 0.05rem 3rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 3px 45px 14px ${(props) => props.theme.colors.pink};
    span:nth-child(1) {
      color: ${(props) => props.theme.colors.teal};
      -webkit-text-stroke-color: transparent;
    }
    span:nth-child(2) {
      color: ${(props) => props.theme.colors.pink};
      -webkit-text-stroke-color: transparent;
    }
  }
`;
