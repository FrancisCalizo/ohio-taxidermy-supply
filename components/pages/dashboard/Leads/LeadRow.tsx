import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function LeadRow() {
  return (
    <Row>
      <div className="row-main">
        <div className="row-avatar">
          <Image
            src={'/images/default-avatar.png'}
            alt="Influencer"
            width={40}
            height={40}
            quality={50}
          />
        </div>

        <div className="row-title">
          <h4>Emily Jenkins</h4>
          <p>Moose Half Turned</p>
        </div>

        <div className="row-email">
          <p>ejenkins401@gmail.com</p>
        </div>

        <div className="row-phone">
          <p>384-238-3499</p>
        </div>

        <div className="row-status">
          <p>Prospect</p>
        </div>

        <div className="row-lead-age">
          <p>14 days ago</p>
        </div>

        <div className="row-view-details">
          <Link href="/dashboard/leads/1">
            <ViewLink>View Details</ViewLink>
          </Link>
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

  .row-main {
    display: flex;
    align-items: center;

    .row-avatar {
      display: flex;
      align-items: center;

      & > div:first-child {
        border: 1px solid gainsboro;
        border-radius: 50px;
      }
    }

    .row-title {
      margin-left: 0.75rem;

      h4 {
        margin: 0;
        font-weight: 500;
      }

      p {
        margin: 0;
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.gray};
      }
    }

    .row-email {
      margin-left: 1.5rem;

      p {
        margin: 0;
      }
    }

    .row-phone {
      margin-left: 1.5rem;

      p {
        margin: 0;
      }
    }

    .row-status {
      margin-left: 1.5rem;

      p {
        margin: 0;
        font-weight: 500;
        background: ${({ theme }) => theme.colors.green};
        color: #fff;
        padding: 0.35rem 0.5rem;
        border-radius: 5px;
      }
    }

    .row-lead-age {
      margin-left: 1.5rem;

      p {
        margin: 0;
        color: ${({ theme }) => theme.colors.gray};
      }
    }

    .row-view-details {
      margin-left: 1.5rem;
    }
  }
`;

const ViewLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;
