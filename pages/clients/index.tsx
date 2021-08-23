import React, { useState, createContext } from 'react';

import Clients from 'components/pages/clients';
import CampaignModal from 'components/pages/clients/CampaignModal';
import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';

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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Clients</PageTitle>
      </div>

      <Clients />
      <CampaignModal />
    </ClientContext.Provider>
  );
}

Index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
