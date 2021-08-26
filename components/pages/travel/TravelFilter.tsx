import React, { useContext } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { darken } from 'polished';

import { travelCategories } from 'data/categoryList';
import { TravelContext } from 'pages/travel';

export default function TravelFilter() {
  const { categoryFilters, setCategoryFilters } = useContext(TravelContext);

  return (
    <FilterContainer>
      <h3 className="label">Filter By Category</h3>
      <Select
        isMulti
        options={travelCategories.map((c) => ({ value: c.id, label: c.title }))}
        isSearchable={false}
        placeholder="Categories"
        value={categoryFilters}
        onChange={setCategoryFilters}
        styles={filterStyles}
        autosize={false}
        instanceId="categories"
      />
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  .label {
    font-size: 1rem;
    letter-spacing: -0.25px;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const filterStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    border: '1px solid #CCD7EA',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.2)',
    '&:hover': {
      border: '1px solid #CCD7EA',
    },
  }),
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    color: '#000',
  }),
  multiValueLabel: (baseStyles: any) => ({
    ...baseStyles,
    background: '#CCD7EA',
  }),
  multiValueRemove: (baseStyles: any) => ({
    ...baseStyles,
    background: '#CCD7EA',
    '&:hover': {
      background: `${darken(0.1, '#CCD7EA')}`,
      color: '#000',
      cursor: 'pointer',
    },
  }),
};
