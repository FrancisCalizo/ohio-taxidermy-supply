import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Container, PictureContainer, Card, CardDialog, RowTitle } from 'components/utils/styled';
import { verticalSliderProps } from 'components/utils';

export default function BeautyCosmesticsRow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [influencerData, setInfluencerData] = useState<any>(null);

  return (
    <Container>
      <RowTitle>
        <span>Beauty & Cosmetics</span>
      </RowTitle>

      <Slider {...verticalSliderProps}>
        {profiles.map((influencer, key) => (
          <PictureContainer
            key={key}
            onClick={() => {
              setInfluencerData(influencer);
              setIsModalOpen(true);
            }}
          >
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
        <ModalHead>
          <button onClick={() => setIsModalOpen(false)}>X</button>
        </ModalHead>

        <Image
          src={`/images/influencer-index/${influencerData.pic}`}
          alt="Picture of the author"
          layout="responsive"
          width={310}
          height={440}
          quality={50}
        />

        <ModalContent>
          <h4>{influencerData.name}</h4>

          {/* TODO: Need to make `industry an actual array,` */}
          {influencerData.industry[0].split(',').map((ind: any, key: any) => (
            <Industrybadge key={key}>{ind}</Industrybadge>
          ))}

          <p style={{ fontSize: 12 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fuga soluta porro voluptas
            nesciunt excepturi reprehenderit quod aliquid expedita! Vero tenetur minima quae dolorum
            aut natus. Harum, vel nam? Obcaecati.
          </p>

          <div style={{ display: 'flex' }}>
            <SaveButton>Save</SaveButton>
            <ContactButton>Contact</ContactButton>
          </div>
        </ModalContent>
      </Modal>
    </Container>
  );
}
const ContactButton = styled.button`
  display: block;
  width: 100%;
  background: #e20046;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
`;

const SaveButton = styled(ContactButton)`
  background: #f1f2f3;
  color: #000;
  border: 1px solid #babfc4;
`;

const Industrybadge = styled.div`
  background: #e20046;
  display: inline-block;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  text-align: center;
  text-transform: capitalize;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 12px;
`;

const ModalHead = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
  margin-bottom: 1rem;
  z-index: 1;

  & button {
    padding: 0.5rem 0.7rem;
    background: #ff0051;
    color: white;
    border: 1px solid white;
    border-radius: 50px;
  }
`;

const ModalContent = styled.div`
  padding: 1rem;

  & h4 {
    background: #000;
    padding: 0.5rem 1rem;
    color: white;
    text-transform: uppercase;

    text-align: center;
    margin: 0;
  }
`;

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
