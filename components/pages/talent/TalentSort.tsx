import React from 'react';
import { useSelect } from 'downshift';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const items = ['Florida', 'California', 'Texas'];

export default function TalentSort() {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  return (
    <div>
      <Dropdown {...getToggleButtonProps()}>
        <div className="dropdown-display">
          <div>{selectedItem || 'Sort By'}</div>
          <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '1.5rem' }} />
        </div>
      </Dropdown>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

const Dropdown = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  cursor: pointer;

  .dropdown-display {
    display: flex;
    align-items: center;
  }
`;
