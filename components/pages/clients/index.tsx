import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import FeaturedCampaign from './FeaturedCampaign';

const CLIENTS = [
  { name: 'Bang Energy', url: 'bang.jpeg', backgroundColor: '#fff' },
  { name: 'Dolls Kill', url: 'dolls-kill.png', backgroundColor: '#fff' },
  { name: 'Pretty Little Thing', url: 'pretty-little-thing.jpeg', backgroundColor: '#000' },
  { name: 'White Bull Coffee', url: 'white-bull.png', backgroundColor: '#000' },
  { name: 'Andaz Maui', url: 'andaz.png', backgroundColor: '#fff' },
];

export default function index() {
  return (
    <MainContainer>
      <ClientsContainer>
        {CLIENTS.map((client, key) => (
          <ClientsCard key={key} client={client}>
            <div className="client-image-container">
              <Image
                src={`/images/clients/${client.url}`}
                alt="logo"
                quality={80}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="card-bottom">{client.name}</div>
          </ClientsCard>
        ))}
      </ClientsContainer>

      <FeaturedCampaign />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1300px;
`;

const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ClientsCard = styled.div<{ client: any }>`
  margin: 0.5rem;

  .client-image-container {
    position: relative;
    height: 250px;
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: ${({ client }) => client.backgroundColor};
    border-radius: 10px 10px 0 0;
  }

  .card-bottom {
    text-align: center;
    padding: 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.1rem;
    background-color: rgba(125, 125, 125, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-top: none;
    border-radius: 0 0 10px 10px;
  }
`;
