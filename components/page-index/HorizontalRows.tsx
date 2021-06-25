import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { Container, PictureContainer, Card, CardDialog, RowTitle } from 'components/utils/styled';
import { horizontalSliderProps } from 'components/utils';

interface HorizontalRowProps {
  categoryTitle: string;
  profiles: any[];
}

export default function HorizontalRow({ categoryTitle, profiles }: HorizontalRowProps) {
  return (
    <Container>
      <RowTitle>
        <span>{categoryTitle}</span>
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
                      src={`/images/star.png`}
                      alt="rating"
                    />
                  </div>
                </div>
                <div>
                  <h5 style={{ color: 'gray', margin: '.25rem .1rem' }}>
                    {influencer.industry.map((i: string, idx: number) => (
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
