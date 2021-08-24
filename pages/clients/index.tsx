import React, { useState, createContext } from 'react';
import { useQuery } from 'react-query';

import Clients from 'components/pages/clients';
import CampaignModal from 'components/pages/clients/CampaignModal';
import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';
import { getCampaigns } from 'components/api/clients';

export const ClientContext = createContext({} as any);

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [featuredCampaign, setFeaturedCampaign] = useState(null);

  const { data, isLoading } = useQuery('campaigns', getCampaigns);

  // TODO: Create Featured Campaign Section in Contentful. Then remove this useEffect
  React.useEffect(() => {
    const FEATURED_TITLE = 'Fueling the Destiny';
    const featured = data?.items.find((item: any) => item.fields.title === FEATURED_TITLE);
    setFeaturedCampaign(featured as any);
  }, [data]);

  if (isLoading) <h1>Loading</h1>;

  return (
    <ClientContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        campaigns: data?.items,
        selectedCampaign,
        setSelectedCampaign,
        featuredCampaign,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Clients</PageTitle>
      </div>

      <Clients />
      <CampaignModal />
    </ClientContext.Provider>
  );
}

Index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
