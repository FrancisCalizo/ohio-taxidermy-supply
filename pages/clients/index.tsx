import React, { useState } from 'react';
import styled from 'styled-components';

import Clients from 'components/pages/clients';
import CampaignModal from 'components/pages/clients/CampaignModal';
import SiteLayout from 'components/layout/SiteLayout';

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Title>
        <span className="title-check">Check Out Our</span>{' '}
        <span className="title-client">Clients</span>
      </Title>

      <Clients setIsModalOpen={setIsModalOpen} />
      <CampaignModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
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
