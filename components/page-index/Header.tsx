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
      <TitleBlock>
        <Title>
          <span>Cast</span>Me<span>App</span>
        </Title>
      </TitleBlock>
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

  span:nth-child(1) {
    color: ${(props) => props.theme.colors.teal};
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.colors.pink};
  }
`;
