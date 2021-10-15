import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';
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

      <JobCardsContainer>
        {/* {FAKE_JOBS.map((job, key) => ( */}
        {/* <LeadRow job={job} key={key} /> */}
        <LeadRow />
        {/* ))} */}
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
