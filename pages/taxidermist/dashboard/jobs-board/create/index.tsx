import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import DashboardLayout from 'components/layout/dashboard/DashboardLayout';

export default function Create() {
  return (
    <DashboardLayout>
      <MainContainer>
        <div className="top-container">
          <h1>Create New Job</h1>
        </div>
      </MainContainer>
    </DashboardLayout>
  );
}

const MainContainer = styled.div`
  .top-container {
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
