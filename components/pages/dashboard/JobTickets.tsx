import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function JobTickets() {
  return (
    <div>
      <TopContainer>
        <div className="button-container">
          <Button>
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: '.5rem' }} />
            Add New Job Ticket
          </Button>
        </div>
      </TopContainer>
    </div>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: end;

  .button-container {
    width: 200px;
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
