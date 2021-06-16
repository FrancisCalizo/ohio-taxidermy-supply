import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { Container, PictureContainer, Card, CardDialog, RowTitle } from 'components/utils/styled';
import { horizontalSliderProps } from 'components/utils';

export default function CookingKitchenRow() {
  return (
    <Container>
      <RowTitle>
        <span>Cooking & Kitchen</span>
      </RowTitle>
      <Slider {...horizontalSliderProps}>
        {profiles.map((influencer, key) => (
          <PictureContainer key={key}>
            <Card>
              <Image
                src={`/images/influencer-index/${influencer.pic}`}
                alt="Picture of the author"
                layout="responsive"
                width={354}
                height={230}
                quality={50}
              />
              <CardDialog>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 style={{ margin: '.1rem' }}>{influencer.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ margin: 0 }}>{influencer.rating}/5</h3>
                    <img
                      style={{ width: 20, height: 20, marginLeft: 6 }}
                      src="images/star.png"
                      alt="rating"
                    />
                  </div>
                </div>
                <div>
                  <h5 style={{ color: 'gray', margin: '.25rem .1rem' }}>
                    {influencer.industry.map((i, idx) => (
                      <span key={idx} style={{ textTransform: 'capitalize' }}>
                        {i}
                      </span>
                    ))}
                  </h5>
                </div>
              </CardDialog>
            </Card>
          </PictureContainer>
        ))}
      </Slider>
    </Container>
  );
}

const profiles = [
  {
    pic: 'travel-1.jpg',
    name: 'Christian Guzman',
    rating: 5,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
  {
    pic: 'travel-2.jpg',
    name: 'Yasmine Garcia',
    rating: 4,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fashion, beauty'],
  },
  {
    pic: 'travel-3.jpg',
    name: 'Becky Smithers',
    rating: 3.5,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
  {
    pic: 'travel-4.jpg',
    name: 'Alex Hamil',
    rating: 4,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['vlogging, fashion, lifestyle'],
  },
  {
    pic: 'travel-5.jpg',
    name: 'Connor Mcgregor',
    rating: 5,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
  {
    pic: 'travel-6.jpg',
    name: 'Justin Walker',
    rating: 4,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
];
