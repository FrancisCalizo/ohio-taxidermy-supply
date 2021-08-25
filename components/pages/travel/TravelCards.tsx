import React, { useContext } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { darken } from 'polished';

import { TravelContext } from 'pages/travel';

export default function TravelCards() {
  const { data, setIsModalOpen, setSelectedCoupon } = useContext(TravelContext);

  return (
    <>
      {data?.items.map((item: any, key: number) => (
        <EventCard key={key}>
          <Image
            src={`https:${item.fields.image.fields.file.url}`}
            alt="events"
            width={300}
            height={200}
            quality={70}
            layout="responsive"
          />
          <CardPaddedArea>
            <CardHeader>
              <h3 className="event-name">{item.fields.title}</h3>
              <h4 className="location">{item.fields.venue}</h4>
              <h4 className="location"> [Insert Geocoder here]</h4>
            </CardHeader>
            <CardContent>
              <div className="badges">
                {item.fields.categories.map((ind: string, key: number) => (
                  <CategoryBadge key={key}>{ind}</CategoryBadge>
                ))}
              </div>

              <p className="description">{item.fields.description}</p>
            </CardContent>
            <CardFooter>
              <OptInButton
                onClick={() => {
                  setSelectedCoupon(item);
                  setIsModalOpen(true);
                }}
              >
                Opt In
              </OptInButton>
            </CardFooter>
          </CardPaddedArea>
        </EventCard>
      ))}
    </>
  );
}

const EventCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const CardPaddedArea = styled.div`
  padding: 0.75rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardHeader = styled.div`
  margin-bottom: 0.75rem;
  text-align: center;

  img {
    border-radius: 50px;
  }

  .event-name {
    font-size: 16px;
    margin: 0.5rem 0;
  }

  .location {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
    margin: 0;
  }
`;

const CategoryBadge = styled.div`
  background: ${(props) => props.theme.colors.paleBlue};
  display: inline-block;
  color: ${(props) => darken(0.6, props.theme.colors.paleBlue)};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  text-align: center;
  text-transform: capitalize;
  margin: 0.25rem 0.5rem 0.25rem 0;
  font-size: 12px;
`;

const CardContent = styled.div`
  .description {
    font-size: 0.75rem;
    margin: 1rem 0 0;
  }

  .badges {
    margin: 0.5rem 0 0.25rem;
  }
`;

const CardFooter = styled.div``;

const OptInButton = styled.button`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors.teal};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin: 0.75rem 0.5rem 0.25rem 0;
  font-size: calc(14px + (18 - 14) * ((100vw - 900px) / (1800 - 900)));
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.2, props.theme.colors.teal)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.teal)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.gray)};

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
