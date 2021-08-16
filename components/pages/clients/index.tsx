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

interface ClientProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function index(props: ClientProps) {
  const { setIsModalOpen } = props;

  return (
    <MainContainer>
      <ClientsContainer>
        {CLIENTS.map((client, key) => (
          <ClientsCard key={key} client={client} onClick={() => setIsModalOpen(true)}>
            <div className="client-image-container">
              <Image
                src={`/images/clients/${client.url}`}
                alt="logo"
                quality={80}
                layout="fill"
                objectFit="contain"
              />
              <ClientImageOverlay>
                <div className="client-image-title">Click to View Campaign</div>
              </ClientImageOverlay>
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

const ClientImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  border-radius: 10px 10px 0 0;
`;

const ClientsCard = styled.div<{ client: any }>`
  margin: 0.5rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  transition: transform 1s ease-in-out;

  .client-image-container {
    position: relative;
    height: 250px;
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: ${({ client }) => client.backgroundColor};
    border-radius: 10px 10px 0 0;

    .client-image-title {
      font-size: 1em;
      font-weight: bold;
    }
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

  &:hover {
    transform: translateY(-30px);
    transition: transform 0.5s ease-in-out;
    cursor: pointer;

    ${ClientImageOverlay} {
      opacity: 1;
    }
  }
`;
