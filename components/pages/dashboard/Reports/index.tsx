import { formatCurrency } from 'components/utils';
import React from 'react';
import styled from 'styled-components';

export default function Reports() {
  return (
    <div>
      <TopContainer>
        <div className="title-container">
          <h1>Reports</h1>
        </div>
      </TopContainer>

      <TotalsContainer>
        {FAKE_REPORT_TOTALS.map((report, key) => (
          <TotalsCard key={key}>
            <h4 className="card-title">{report.totalsTitle}</h4>
            <h4 className="card-statistic">{formatCurrency(report.totalsAmount, 0)}</h4>
          </TotalsCard>
        ))}
      </TotalsContainer>
    </div>
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
`;

const TotalsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 530px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TotalsCard = styled.div`
  background: gainsboro;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem;
  border-radius: 6px;

  .card-title {
    display: inline;
    color: white;
    background: ${({ theme }) => theme.colors.orange};
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 50px;
  }

  .card-statistic {
    color: ${({ theme }) => theme.colors.dark};
    text-align: right;
    font-size: 1.5rem;
    margin: 1.5rem 0 0;
    padding-bottom: 1.5rem;
    border-bottom: 5px solid ${({ theme }) => theme.colors.orange};
  }
`;

const FAKE_REPORT_TOTALS = [
  { totalsTitle: 'Total Revenue', totalsAmount: 1000000 },
  { totalsTitle: 'Yearly Revenue', totalsAmount: 200300 },
  { totalsTitle: 'AR Outstanding', totalsAmount: 34232 },
  { totalsTitle: 'Projected Total', totalsAmount: 43729 },
];
