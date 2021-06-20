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
