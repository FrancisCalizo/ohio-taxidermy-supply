import React, { useState, createContext } from 'react';
import styled from 'styled-components';

import Clients from 'components/pages/clients';
import CampaignModal from 'components/pages/clients/CampaignModal';
import SiteLayout from 'components/layout/SiteLayout';

const CLIENTS = [
  { name: 'Bang Energy', url: 'bang.jpeg', backgroundColor: '#fff' },
  { name: 'Dolls Kill', url: 'dolls-kill.png', backgroundColor: '#fff' },
  { name: 'Pretty Little Thing', url: 'pretty-little-thing.jpeg', backgroundColor: '#000' },
  { name: 'White Bull Coffee', url: 'white-bull.png', backgroundColor: '#000' },
  { name: 'Andaz Maui', url: 'andaz.png', backgroundColor: '#fff' },
];

export const ClientContext = createContext({} as any);

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ClientContext.Provider value={{ isModalOpen, setIsModalOpen, clients: CLIENTS }}>
      <Title>
        <span className="title-check">Check Out Our</span>{' '}
        <span className="title-client">Clients</span>
      </Title>

      <Clients />
      <CampaignModal />
    </ClientContext.Provider>
  );
}

const Title = styled.h1`
  text-align: center;
  margin: 7rem 0 2rem;

  .title-check {
    text-transform: uppercase;
    font-size: 3.25rem;
    letter-spacing: -0.05rem;
  }

  .title-client {
    display: block;
    font-family: Shadows Into Light;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.pink};
    margin-top: -3.25rem;
  }
`;

Index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
