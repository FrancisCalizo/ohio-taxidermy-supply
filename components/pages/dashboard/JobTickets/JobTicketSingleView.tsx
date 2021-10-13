import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { darken } from 'polished';

import { theme } from 'components/Theme';

export default function JobTicketSingleView() {
  return (
    <MainContainer>
      <div className="title">
        <h1>Deer Aggressive Facing </h1>
      </div>

      <div className="form-container">
        <div className="ticket-status-row">
          <div>
            <Label>Ticket Status</Label>
            <Select
              options={[
                { value: 'notStarted', label: 'Not Started' },
                { value: 'started', label: 'Started' },
                { value: 'finished', label: 'Finished' },
              ]}
              instanceId="ticketStatus"
              isSearchable={false}
              styles={selectStyles}
            />
          </div>
        </div>

        <div className="name-row">
          <div>
            <Label>First Name</Label>
            <Input type="text" id="firstName" />
          </div>

          <div>
            <Label>Last Name</Label>
            <Input type="text" id="lastName" />
          </div>
        </div>

        <div className="contact-info-row">
          <div>
            <Label>Phone Number</Label>
            <Input type="text" id="phone" />
          </div>

          <div>
            <Label>Email</Label>
            <Input type="text" id="email" />
          </div>
        </div>

        <div className="first-address-row">
          <div>
            <Label>Address</Label>
            <Input type="text" id="addressOne" />
          </div>

          <div>
            <Label>Address #2 (Optional)</Label>
            <Input type="text" id="addressTwo" />
          </div>
        </div>

        <div className="second-address-row">
          <div>
            <Label>City</Label>
            <Input type="text" id="city" />
          </div>

          <div>
            <Label>State</Label>
            <Select options={[]} isSearchable={false} styles={selectStyles} instanceId="state" />
          </div>

          <div>
            <Label>Zip</Label>
            <Input type="number" id="zip" />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  .form-container {
    background: #fff;
    padding: 1rem;
    border-radius: 5px;

    .ticket-status-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1rem;
    }

    .name-row,
    .contact-info-row,
    first-address-row {
      display: grid;
      grid-template-columns: 4fr 4fr;
      column-gap: 1rem;

      @media (max-width: 630px) {
        grid-template-columns: 1fr;
      }
    }

    .second-address-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1rem;

      @media (max-width: 630px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  margin-left: 2px;
  color: ${({ theme }) => theme.colors.dark};
`;

const Input = styled.input`
  display: block;
  font-size: calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)));
  padding: ${(props) => props.theme.input.padding};
  margin: 0.5rem 0 1rem;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;

  @media (max-width: 630px) {
    max-width: none !important;
  }

  ${(props) => props.theme.global.setInputFocus(darken(0.1, props.theme.colors.orange))}

  // Hides number arrows
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const selectStyles = {
  container: (baseStyles: any) => ({
    ...baseStyles,
    margin: '.5rem 0 1rem',
  }),
  control: (baseStyles: any) => ({
    ...baseStyles,
    fontSize: 'calc(14px + (16 - 14) * ((100vw - 400px) / (1800 - 400)))',
    border: '1px solid lightgray',
    boxShadow: 'none',
    '&:hover': { border: '1px solid #CCD7EA' },
    '&:active': { border: `1px solid ${darken(0.03, theme.colors.orange)}` },
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    height: '40px',
    overflow: 'auto',
  }),
  menuList: (baseStyles: any) => ({
    ...baseStyles,
    maxHeight: '150px',
  }),
};
