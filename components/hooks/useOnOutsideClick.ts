import { useEffect } from 'react';

type OpenMenus = {
  isHamburgerOpen: boolean;
  isMiddleSelectionOpen: boolean;
};

export default function useOnOutsideClick(ref: any, callback: any, openMenus?: OpenMenus) {
  useEffect(() => {
    const listener = (event: any) => {
      // I was having issues with the useOnOutsideClickHandler when trying to close the two
      // dropdowns on the nav on mobile. The issues arose when trying to close the regular
      // hamburger while the middle was open, and vice versa. Passing in to see if the resepective
      // menu was open and determining where the user is clicked was the option I decided to go with,
      // which is why an optional third parameter (state of the dropdowns) is being passed.
      if (openMenus?.isHamburgerOpen && event.target.classList.contains('burger-line')) {
        return;
      }
      if (openMenus?.isMiddleSelectionOpen && event.target.classList.contains('middle-dropdown')) {
        return;
      }

      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, callback]);
}
