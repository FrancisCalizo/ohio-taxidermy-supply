import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Modal from 'react-modal';
import styled from 'styled-components';
import { darken } from 'polished';

import { Container, PictureContainer, Card, CardDialog, RowTitle } from 'components/utils/styled';
import { verticalSliderProps } from 'components/utils';

interface VerticalRowProps {
  categoryTitle: string;
  profiles: any[];
}

export default function VerticalRow({ categoryTitle, profiles }: VerticalRowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [influencerData, setInfluencerData] = useState<any>(null);

  return (
    <Container>
      <RowTitle>
        <span>{categoryTitle}</span>
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
                      src={`/images/star.png`}
                      alt="rating"
                    />
                  </div>
                </div>
                <div>
                  <h5 style={{ color: 'gray', margin: '.25rem .1rem' }}>
                    <span style={{ textTransform: 'capitalize' }}>
                      {influencer.industry.toString().replace(/,/g, ', ')}
                    </span>
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
        style={{
          overlay: { zIndex: 1000 },
          content: { maxWidth: 400, height: '90vh', margin: '0 auto' },
        }}
      >
        <ModalHead>
          <button onClick={() => setIsModalOpen(false)}>X</button>
        </ModalHead>

        <Image
          src={`/images/influencer-index/${influencerData?.pic}`}
          alt="Picture of the author"
          layout="responsive"
          width={310}
          height={440}
          quality={50}
        />

        <ModalContent>
          <h4>{influencerData?.name}</h4>

          {influencerData?.industry.map((ind: any, key: any) => (
            <Industrybadge key={key}>{ind}</Industrybadge>
          ))}

          <p style={{ fontSize: 12 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui fuga soluta porro voluptas
            nesciunt excepturi reprehenderit quod aliquid expedita! Vero tenetur minima quae dolorum
            aut natus. Harum, vel nam? Obcaecati.
          </p>

          <ModalFooter>
            <SaveButton>Save</SaveButton>
            <ContactButton>Contact</ContactButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

const ContactButton = styled.button`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors.teal};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.teal)};
  }
`;

const SaveButton = styled(ContactButton)`
  color: #fff;
  background: ${(props) => props.theme.colors.pink};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.pink)};
  }
`;

const Industrybadge = styled.div`
  background: ${(props) => props.theme.colors.teal};
  display: inline-block;
  color: #000;
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
    background: #e20046;
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
    border-radius: 20px;

    text-align: center;
    margin: 0;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto 0 auto 0.4rem;
`;
