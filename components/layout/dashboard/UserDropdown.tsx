import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ArrowContainer, PopoverState } from 'react-tiny-popover';
import styled from 'styled-components';
import { lighten } from 'polished';

export default function UserDropdown(props: PopoverState) {
  const { position, childRect, popoverRect } = props;

  return (
    <ArrowContainer
      position={position}
      childRect={childRect}
      popoverRect={popoverRect}
      arrowColor="white"
      arrowSize={8}
    >
      <DropdownContainer>
        {userDashboardDropdownItems.map((item, key) => (
          <div key={key} className="dropdown-row">
            <FontAwesomeIcon icon={item.icon} style={{ fontSize: 20, marginRight: '1rem' }} />
            {item.title}
          </div>
        ))}
      </DropdownContainer>
    </ArrowContainer>
  );
}

const userDashboardDropdownItems = [
  {
    title: 'Profile',
    icon: faUser,
  },
  {
    title: 'Settings',
    icon: faCog,
  },
  {
    title: 'Logout',
    icon: faSignOutAlt,
  },
];

export const DropdownContainer = styled.div`
  background: white;
  border: 1px solid lightgray;
  border-top: none;
  width: 220px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  .dropdown-row {
    display: flex;
    padding: 0.75rem 1rem;
    border-radius: 5px;

    &:hover {
      background: ${lighten(0.12, '#909cd8')};
      color: white;
    }
  }
`;
