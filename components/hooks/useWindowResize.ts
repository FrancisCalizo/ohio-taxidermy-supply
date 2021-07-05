import React from 'react';

export default function useWindowResize() {
  const [size, setSize] = React.useState([0, 0]);

  React.useEffect(() => {
    // Window is undefined in NextJS until component is rendered. Therefore
    // we must initially set the window size after the component has fully rendered
    setSize([window.innerWidth, window.innerHeight]);

    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
