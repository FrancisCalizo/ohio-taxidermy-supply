import React, { useContext } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { darken } from 'polished';

// import { vendingCategories } from 'data/categoryList';
import { VendingContext } from 'pages/vending';

export default function VendingFilter() {
  const {
    categoryFilters,
    setCategoryFilters,
    companyFilters,
    setCompanyFilters,
    postTypeFilters,
    setPostTypeFilters,
  } = useContext(VendingContext);

  return (
    <FilterContainer>
      <h3 className="label">Filter By Company</h3>
      <Select
        isMulti
        options={[{ id: 'sampleCompany', title: 'Sample Company' }].map((c) => ({
          value: c.id,
          label: c.title,
        }))}
        isSearchable={false}
        placeholder="Companies"
        value={companyFilters}
        onChange={setCompanyFilters}
        styles={filterStyles}
        autosize={false}
        instanceId="companies"
      />

      <h3 className="label">Filter By Category</h3>
      <Select
        isMulti
        options={[{ id: 'sampleCategory', title: 'Sample Category' }].map((c) => ({
          value: c.id,
          label: c.title,
        }))}
        isSearchable={false}
        placeholder="Categories"
        value={categoryFilters}
        onChange={setCategoryFilters}
        styles={filterStyles}
        autosize={false}
        instanceId="categories"
      />

      <h3 className="label">Filter By Post Type</h3>
      <Select
        isMulti
        options={[{ id: 'samplePostType', title: 'Sample Post Type' }].map((c) => ({
          value: c.id,
          label: c.title,
        }))}
        isSearchable={false}
        placeholder="Post Type"
        value={postTypeFilters}
        onChange={setPostTypeFilters}
        styles={filterStyles}
        autosize={false}
        instanceId="postType"
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
    marginBottom: '1rem',
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
