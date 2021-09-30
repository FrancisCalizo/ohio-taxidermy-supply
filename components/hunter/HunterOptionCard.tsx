import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { darken } from 'polished';

const CARD_OPTIONS = [
  {
    title: 'Build A Deer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error a temporibus voluptatibus quisquam vitae, natus dignissimos exercitationem unde aliquam perferendis sint quia asperiores reiciendis officiis rerum enim voluptatem possimus quas doloribus eligendi veniam excepturi nulla maiores? Ducimus id necessitatibus corrupti? Distinctio nostrum amet repudiandae omnis ratione illum ipsa aperiam.',
    pictureUrl: '/images/build-a-deer.jpg',
    buttonText: 'View Build Options',
    route: null,
  },
  {
    title: 'Scout For Taxidermist',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error a temporibus voluptatibus quisquam vitae, natus dignissimos exercitationem unde aliquam perferendis sint quia asperiores reiciendis officiis rerum enim voluptatem possimus quas doloribus eligendi veniam excepturi nulla maiores? Ducimus id necessitatibus corrupti? Distinctio nostrum amet repudiandae omnis ratione illum ipsa aperiam.',
    pictureUrl: '/images/scout-taxidermist.jpg',
    buttonText: 'View Scout Options',
    route: null,
  },
];

export default function HunterOptionCards() {
  return (
    <>
      {CARD_OPTIONS.map((opt: any, key: number) => (
        <HunterOptionCard key={key}>
          <Image
            src={opt.pictureUrl}
            alt="option"
            width={300}
            height={170}
            quality={70}
            layout="responsive"
          />
          <CardPaddedArea>
            <CardHeader>
              <h3 className="card-title">{opt.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="description">{opt.description}</p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequuntur porro
                ullam optio similique explicabo pariatur facere illum perferendis aliquam sequi odio
                voluptates, nobis mollitia? Velit corrupti aliquam, autem ad, consequuntur harum
                sapiente qui, exercitationem incidunt vel itaque culpa veniam ut dolorem architecto
                quaerat dolore neque possimus! Inventore, laborum natus?
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => console.log('clicked')}>{opt.buttonText}</Button>
            </CardFooter>
          </CardPaddedArea>
        </HunterOptionCard>
      ))}
    </>
  );
}

const HunterOptionCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(15, 13, 13, 0.2);
  border: 1px solid lightgray;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    margin: 1rem 0;
  }
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
  display: flex;
  justify-content: center;

  .card-title {
    display: inline-block;
    text-align: center;
    font-size: calc(16px + (22 - 16) * ((100vw) / (1200 - 300)));
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.brown};
  }
`;

const CardContent = styled.div`
  .description {
    font-size: 0.75rem;
    margin: 0;
  }
`;

const CardFooter = styled.div``;

const Button = styled.button`
  display: block;
  width: 100%;
  background: ${({ theme }) => theme.colors.brown};
  color: white;
  border: 0.5px solid white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin: 1.5rem 0 0;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${(props) => darken(0.05, props.theme.colors.brown)};
  }

  ${(props) => props.theme.global.setFocus('#fff')}
`;
