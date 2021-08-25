import React, { useState, createContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';
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

      <MainContainer>
        <Clients />
        <CampaignModal />

        <div className="join-now">
          <h4>Interested in becoming a client?</h4>
          <Link href="/signup?signupType=client">
            <JoinNowButton>Sign Up</JoinNowButton>
          </Link>
        </div>
      </MainContainer>
    </ClientContext.Provider>
  );
}

const MainContainer = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1300px;

  .join-now {
    text-align: center;
    margin: 2.5rem 0 1rem;

    h4 {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const JoinNowButton = styled.button`
  display: block;
  width: 120px;
  background: ${(props) => props.theme.colors.teal};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin: 0 auto 2rem;
  font-size: calc(10px + (18 - 10) * ((100vw - 900px) / (1800 - 900)));
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.teal)};

  &:hover {
    background: ${(props) => darken(0.1, props.theme.colors.teal)};
  }

  ${(props) => props.theme.global.setFocus(props.theme.colors.teal)};

  @media (max-width: 1050px) {
    font-size: calc(10px + (14 - 10) * ((100vw - 600px) / (1050 - 600)));
  }

  @media (max-width: 810px) {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

Index.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
