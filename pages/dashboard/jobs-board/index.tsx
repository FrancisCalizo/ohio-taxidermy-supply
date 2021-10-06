import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';

export default function JobsBoard() {
  return (
    <DashboardLayout>
      <TopContainer>
        <div className="button-container">
          <Link href="/dashboard/jobs-board/create">
            <Button>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '.5rem' }} />
              Create Job
            </Button>
          </Link>
        </div>
      </TopContainer>
    </DashboardLayout>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: end;

  .button-container {
    width: 165px;
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
