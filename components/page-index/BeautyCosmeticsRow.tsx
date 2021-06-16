import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Modal from 'react-modal';

import { Container, PictureContainer, Card, CardDialog, RowTitle } from 'components/utils/styled';
import { verticalSliderProps } from 'components/utils';

export default function BeautyCosmesticsRow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <RowTitle>
        <span>Beauty & Cosmetics</span>
      </RowTitle>

      <Slider {...verticalSliderProps}>
        {profiles.map((influencer, key) => (
          <PictureContainer key={key} onClick={() => setIsModalOpen(true)}>
            <Card>
              <Image
                src={`/images/influencer-index/${influencer.pic}`}
                alt="Picture of the author"
                layout="responsive"
                width={310}
                height={440}
                quality={50}
              />
              <CardDialog>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3>{influencer.name}</h3>
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Influencer Modal"
        ariaHideApp={false}
        style={{ overlay: { zIndex: 1000 } }}
      >
        <h2>Welcome to the jungle</h2>
      </Modal>
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
