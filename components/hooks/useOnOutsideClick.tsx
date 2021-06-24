import { useEffect } from 'react';

export default function useOnOutsideClick(ref: any, callback: any) {
  useEffect(() => {
    const listener = (event: any) => {
      // Adding line to fix clicking on close hamburger bug
      if (event.target.classList.contains('burger-line')) {
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
  }, [ref, callback]);
}
