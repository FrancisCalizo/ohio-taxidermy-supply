import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function Header() {
  return (
    <div style={{ marginTop: 83 }}>
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
        autoplay={true}
        autoplaySpeed={5000}
      >
        {[1, 2, 3, 4].map((num) => (
          <Banner key={num} url={num} />
        ))}
      </Slider>
      <Title>
        <span>In</span>fluencer<span>App</span>
      </Title>
    </div>
  );
}

const Banner = styled.div<{ url: any }>`
  height: calc(100vh - 83px);
  background-image: ${({ url }) => `url(/images/influencer-index/banner-${url}.jpg)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Title = styled.h1`
  position: absolute;
  top: 0;
  width: 100%;
  font-size: calc(48px + (100 - 48) * ((100vw - 300px) / (1200 - 300)));
  text-align: center;
  line-height: calc(100vh - 100px);
  height: 100%;
  transform: skewX(-20deg);
  transform: rotate(-15deg);
  color: #fff;

  span:nth-child(1) {
    color: #ffe400;
  }

  span:nth-child(2) {
    color: #e20046;
  }
`;
