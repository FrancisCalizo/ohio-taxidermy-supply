import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function JobTickets() {
  return (
    <div>
      <TopContainer>
        <div className="button-container">
          <div className="button">
            <Button variant="white">
              <FontAwesomeIcon icon={faSearch} style={{ marginRight: '.5rem' }} />
              Add From Jobs Board
            </Button>
          </div>
          <div className="button">
            <Button>
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: '.5rem' }} />
              Create New Ticket
            </Button>
          </div>
        </div>
      </TopContainer>
    </div>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: end;

  .button-container {
    display: flex;

    .button {
      width: 220px;
      margin-left: 1rem;
    }
  }
`;

const Button = styled.button<{ variant?: 'white' }>`
  display: block;
  width: 100%;
  background: ${({ theme, variant }) => (variant === 'white' ? '#fff' : theme.colors.orange)};
  color: ${({ theme, variant }) => (variant === 'white' ? theme.colors.dark : '#fff')};
  border: 0.5px solid
    ${({ theme, variant }) => (variant === 'white' ? lighten(0.3, theme.colors.dark) : '#fff')};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.button.boxShadow};
  transition: background 300ms ease-in-out, transform 150ms ease-in-out;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'white' ? darken(0.1, '#fff') : darken(0.05, theme.colors.orange)};
  }

  ${({ theme }) => theme.global.setFocus(theme.colors.orange)}
`;
