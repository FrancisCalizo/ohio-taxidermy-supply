import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
import LeadHeader from 'components/pages/dashboard/Leads/LeadHeader';
import LeadRow from 'components/pages/dashboard/Leads/LeadRow';

export default function Leads() {
  return (
    <DashboardLayout>
      <TopContainer>
        <div className="title-container">
          <h1>Leads</h1>
        </div>

        <div className="button-container">
          <Button onClick={() => console.log('Coming soon')}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: '.5rem' }} />
            Create Lead
          </Button>
        </div>
      </TopContainer>

      <LeadHeader />

      <JobCardsContainer>
        {FAKE_LEADS.map((lead, key) => (
          <LeadRow key={key} lead={lead} />
        ))}
      </JobCardsContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .title-container {
    h1 {
      margin: 0.5rem;
    }
  }

  .button-container {
    width: 150px;
    display: flex;
    align-items: center;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background: ${({ theme }) => theme.colors.orange};
  color: white;
  border: 0.5px solid white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${(props) => darken(0.05, props.theme.colors.orange)};
  }

  ${({ theme }) => theme.global.setFocus(theme.colors.orange)}
`;

const JobCardsContainer = styled.div``;

const FAKE_LEADS = [
  {
    name: 'Jake Johnston',
    title: 'Half Moose Turned',
    avatar: '/images/default-avatar.png',
    email: 'jjohnson392@yahoo.com',
    phone: '343-348-3849',
    status: 'Prospect',
    leadAge: 3,
  },
  {
    name: 'Ryan Reynolds',
    title: 'Deer Full Aggressive',
    avatar: '/images/default-avatar.png',
    email: 'rryanson3322@yahoo.com',
    phone: '123-564-3493',
    status: 'Opportunity',
    leadAge: 14,
  },
  {
    name: 'Michael Smith',
    title: 'Half Tilt Donkey',
    avatar: '/images/default-avatar.png',
    email: 'msmith392@yahoo.com',
    phone: '553-234-4242',
    status: 'Closed',
    leadAge: 2,
  },
  {
    name: 'Ricky Bobby',
    title: 'Half Tilt Donkey',
    avatar: '/images/default-avatar.png',
    email: 'rbobby392@aol.com',
    phone: '553-234-4242',
    status: 'Opportunity',
    leadAge: 17,
  },
  {
    name: 'Bob Sanders',
    title: 'Half Tilt Moose',
    avatar: '/images/default-avatar.png',
    email: 'bsand@gmail.com',
    phone: '553-234-1111',
    status: 'Closed',
    leadAge: 4,
  },
  {
    name: 'Nick Role',
    title: 'Full Deer',
    avatar: '/images/default-avatar.png',
    email: 'notrickrole@aol.com',
    phone: '553-234-4242',
    status: 'Closed',
    leadAge: 4,
  },
];
