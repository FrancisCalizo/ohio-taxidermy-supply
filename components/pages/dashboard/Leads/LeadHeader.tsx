import React from 'react';
import styled from 'styled-components';

export default function LeadHeader() {
  return (
    <Row>
      <div className="row-main">
        <div className="row-avatar">
          <div className="row-title">
            <p>Contact</p>
          </div>
        </div>

        <div className="row-email">
          <p>email</p>
        </div>

        <div className="row-phone">
          <p>phone</p>
        </div>

        <div className="row-status">
          <p>status</p>
        </div>

        <div className="row-lead-age">
          <p>Last Contact</p>
        </div>

        <div className="row-view-details">
          <p>Details</p>
        </div>
      </div>
    </Row>
  );
}

const Row = styled.div`
  background: #fff;
  padding: 0.5rem 1rem;
  border: 1px solid gainsboro;
  border-radius: 5px;
  min-width: 950px;

  .row-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;

    .row-title {
      width: 118px;
      margin-left: 56px;
      text-transform: capitalize;
    }

    .row-email {
      width: 210px;
      text-transform: capitalize;
    }

    .row-phone {
      width: 160px;
      text-transform: capitalize;
    }

    .row-status {
      width: 140px;
      text-transform: capitalize;
    }

    .row-lead-age {
      width: 110px;
      text-transform: capitalize;
    }

    .row-view-details {
      width: 100px;
      text-transform: capitalize;
    }
  }
`;
