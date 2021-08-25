import React, { useContext } from 'react';
import Select from 'react-select';

import { TravelContext } from 'pages/travel';

const SORT_ITEMS = [
  { value: 'NONE', label: 'None' },
  { value: 'AZ', label: 'A-Z' },
  { value: 'ZA', label: 'Z-A' },
  { value: 'FOLLOWERS_ASC', label: 'Followers (Asc)' },
  { value: 'FOLLOWERS_DESC', label: 'Followers (Desc)' },
];

export default function TravelSort() {
  const { sort, setSort } = useContext(TravelContext);

  const sortFunction = (option: any, contextObject: any) => {
    const { context } = contextObject;

    if (context === 'value') {
      if (option.label === 'None') {
        return `Sort By`;
      }
      return `Sort: ${option.label}`;
    }
    return option.label;
  };

  return (
    <Select
      placeholder="Sort By"
      options={SORT_ITEMS}
      isSearchable={false}
      value={sort}
      onChange={setSort}
      styles={filterStyles}
      instanceId="sort"
      formatOptionLabel={sortFunction}
    />
  );
}

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
};
