import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function JobCard() {
  return (
    <div>
      <Card>
        <div className="card-header">
          <Image
            src="/images/default-avatar.png"
            alt="Influencer"
            width={50}
            height={50}
            quality={50}
          />
          <hr className="header-hr" />
        </div>
      </Card>
    </div>
  );
}

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 1rem;
  background: #fff;

  .card-header {
    display: flex;
    align-items: center;

    & .header-hr {
      border-color: rgba(155, 155, 155, 0.1);
      height: 1px;
      width: 100%;
    }

    img {
      border-radius: 50px;
      border: 1px solid gainsboro !important;
    }

    .handle {
      font-size: 16px;
      margin-left: 10px;
    }
  }
`;
