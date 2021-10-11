import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface JobCardProps {
  job: any;
}

export default function JobCard({ job }: JobCardProps) {
  const { title, hunterName, avatar, description } = job;

  return (
    <div>
      <Card>
        <div className="card-header">
          <Image src={avatar} alt="Influencer" width={50} height={50} quality={50} />
          <hr className="header-hr" />
        </div>

        <div className="title-area">
          <h4>{hunterName}</h4>
          <h3>{title}</h3>
        </div>

        <p className="description">{description}</p>
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
  height: 100%;

  & .card-header {
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
  }

  & .title-area {
    & h4 {
      color: ${({ theme }) => theme.colors.gray};
      margin-bottom: 0;
    }

    & h3 {
      margin-top: 0.5rem;
    }
  }

  .description {
    font-size: 0.9rem;
  }
`;
