import React from 'react';
import { useSelect } from 'downshift';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const items = ['None', 'A-Z', 'Z-A', 'Followers (Asc)', 'Followers (Desc)'];

export default function TalentSort() {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  return (
    <div>
      <Dropdown {...getToggleButtonProps()}>
        <div className="dropdown-display">
          <div>
            {!selectedItem || selectedItem === 'None' ? 'Sort By' : `Sort By: ${selectedItem}`}
          </div>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            style={{ marginLeft: '1.5rem' }}
          />
        </div>
      </Dropdown>
      <DropdownMenu {...getMenuProps()} isOpen={isOpen}>
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
      </DropdownMenu>
    </div>
  );
}

const Dropdown = styled.button`
  background: white;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  border-radius: 5px;
  margin: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.paleBlue};
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);

  .dropdown-display {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  background: #fff;
  transform: translateX(-3.5rem);
  width: 175px;

  z-index: 999;
  list-style-type: none;
  padding: 0;
  border: ${({ isOpen, theme }) => isOpen && `1px solid ${theme.colors.paleBlue}`};
  border-radius: 5px;
  margin-top: -0.75rem;

  li {
    padding: 0.5rem 1rem;
  }
`;
