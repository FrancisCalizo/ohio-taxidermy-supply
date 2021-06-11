import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

export default function Banner() {
  return (
    <div>
      <Slider
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
        autoplay={true}
        autoplaySpeed={5000}
      >
        {[1, 2, 3, 4].map((influencer) => (
          <div key={influencer}>
            <Image
              src={`/images/influencer-index/banner-${influencer}.jpg`}
              alt="Picture of the author"
              quality={80}
              layout="responsive"
              width={825}
              height={450}
              priority={influencer === 1 ? true : false}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
