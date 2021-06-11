import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { Container, PictureContainer, Card, CardDialog, RowTitle } from 'components/utils/styled';

export default function BeautyCosmesticsRow() {
  return (
    <Container>
      <RowTitle>
        <span>Trending</span>
      </RowTitle>
      <Slider infinite speed={500} slidesToShow={4} slidesToScroll={1}>
        {profiles.map((influencer, key) => (
          <PictureContainer key={key}>
            <Card>
              <Image
                src={`/images/influencer-index/${influencer.pic}`}
                alt="Picture of the author"
                width={310}
                height={440}
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
    pic: 'influencer-1.jpg',
    name: 'Christian Guzman',
    rating: 5,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
  {
    pic: 'influencer-2.jpg',
    name: 'Yasmine Garcia',
    rating: 4,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fashion, beauty'],
  },
  {
    pic: 'influencer-3.jpg',
    name: 'Becky Smithers',
    rating: 3.5,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
  {
    pic: 'influencer-4.jpg',
    name: 'Alex Hamil',
    rating: 4,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['vlogging, fashion, lifestyle'],
  },
  {
    pic: 'influencer-5.jpg',
    name: 'Connor Mcgregor',
    rating: 5,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
  {
    pic: 'influencer-6.jpg',
    name: 'Justin Walker',
    rating: 4,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['fitness, lifestyle'],
  },
  {
    pic: 'influencer-7.jpg',
    name: 'Lonnie Pryor',
    rating: 4.5,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['vlogging, lifestyle, fashion'],
  },
  {
    pic: 'influencer-8.jpg',
    name: 'Serena Barry',
    rating: 4,
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt excepturi odio aspernatur perspiciatis, officia, beatae saepe earum totam, obcaecati corrupti unde laboriosam debitis quas! Quae at odit odio culpa aperiam?',
    industry: ['beauty, lifestyle'],
  },
];
