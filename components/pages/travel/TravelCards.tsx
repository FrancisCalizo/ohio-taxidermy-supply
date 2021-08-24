import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { darken } from 'polished';

interface TravelCardProps {
  data: any;
}

export default function TravelCards(props: TravelCardProps) {
  const { data } = props;

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
              <p className="description">{item.fields.description}</p>

              <div className="badges">
                {/* {item.fields.categories.map((ind: string, key: number) => (
                  <Industrybadge key={key}>{ind}</Industrybadge>
                ))} */}
              </div>
            </CardContent>
            <CardFooter>
              <ViewEventButton>View Event</ViewEventButton>
              <BookEventButton>Book Now</BookEventButton>
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

const Industrybadge = styled.div`
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

const ViewEventButton = styled.button`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors.green};
  color: ${(props) => darken(0.6, props.theme.colors.green)};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border-radius: 50px;
  margin: 0.75rem 0.5rem 0.25rem 0;
  font-size: calc(14px + (18 - 14) * ((100vw - 900px) / (1800 - 900)));
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.green)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.green)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.green)};

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

const BookEventButton = styled(ViewEventButton)`
  background: #fff;
  color: ${(props) => props.theme.colors.gray};
  border: 1px solid ${(props) => props.theme.colors.gray};

  &:hover {
    background: ${darken(0.1, '#fff')};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.gray)};
`;
