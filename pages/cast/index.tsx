import React from 'react';
import styled from 'styled-components';

import SiteLayout from 'components/layout/SiteLayout';
import { PageTitle } from 'components/utils/styled';

export default function Cast() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PageTitle>Your Cast</PageTitle>
      </div>

      <BudgetContainer>
        <div className="budget">
          <h4>Budget</h4>
          <h2>$322,108.93</h2>
        </div>
        <div className="your-cast">
          <h4>Your Cast</h4>
        </div>
      </BudgetContainer>
    </div>
  );
}

const BudgetContainer = styled.div`
  display: flex;
  margin: 0 1rem;
  padding: 1rem 2rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  h4 {
    margin: 0.25rem 0 0.5rem;
    color: ${(props) => props.theme.colors.gray};
  }

  .budget {
    margin-right: 2rem;

    h2 {
      color: ${(props) => props.theme.colors.darkGray};
      margin: 0;
      font-size: 3rem;
    }
  }

  .your-cast {
    flex: 1 1 auto;
  }
`;

Cast.getLayout = (page: any) => <SiteLayout>{page}</SiteLayout>;
