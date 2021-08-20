import React from 'react';
import Select from 'react-select';
import { darken } from 'polished';

import { categories } from 'data/categoryList';

interface TalentFilterProps {
  categoryFilters: any;
  setCategoryFilters: React.Dispatch<React.SetStateAction<any>>;
}

export default function TalentFilter(props: TalentFilterProps) {
  const { categoryFilters, setCategoryFilters } = props;

  return (
    <Select
      isMulti
      options={categories.map((c) => ({ value: c.id, label: c.title }))}
      isSearchable={false}
      placeholder="Categories"
      value={categoryFilters}
      onChange={setCategoryFilters}
      styles={filterStyles}
      autosize={false}
      instanceId="categories"
    />
  );
}

const filterStyles = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    maxWidth: 300,
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
