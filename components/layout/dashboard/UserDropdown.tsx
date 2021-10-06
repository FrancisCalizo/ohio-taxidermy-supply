import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ArrowContainer, PopoverState } from 'react-tiny-popover';
import styled from 'styled-components';
import { lighten } from 'polished';

import { useAuth } from 'components/AuthContext';

export default function UserDropdown(props: PopoverState) {
  const { position, childRect, popoverRect } = props;
  const { logout } = useAuth();

  const userDashboardDropdownItems = [
    {
      title: 'Profile',
      icon: faUser,
      onClick: () => console.log('Clicked profile'),
    },
    {
      title: 'Settings',
      icon: faCog,
      onClick: () => console.log('Clicked settings'),
    },
    {
      title: 'Logout',
      icon: faSignOutAlt,
      onClick: logout,
    },
  ];

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
          <button key={key} className="dropdown-row" onClick={() => item.onClick()}>
            <FontAwesomeIcon icon={item.icon} style={{ fontSize: 20, marginRight: '1rem' }} />
            {item.title}
          </button>
        ))}
      </DropdownContainer>
    </ArrowContainer>
  );
}

export const DropdownContainer = styled.div`
  background: white;
  border: 1px solid lightgray;
  border-top: none;
  width: 220px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  .dropdown-row {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    width: 100%;
    background: transparent;
    border: none;
    font-size: 0.9rem;

    &:hover {
      background: ${({ theme }) => lighten(0.12, theme.colors.orange)};
      color: white;
    }
  }
`;
