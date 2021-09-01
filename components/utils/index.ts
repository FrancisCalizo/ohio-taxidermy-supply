// Responsive props for Vertical Pictures
export const sliderResponsiveVertical = [
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
    },
  },
  {
    breakpoint: 880,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

// Responsive props for Horizontal Pictures
export const sliderResponsiveHorizontal = [
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
    },
  },
  {
    breakpoint: 880,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

// Vertical Slider Picture props
export const verticalSliderProps = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: sliderResponsiveVertical,
};

// Horizontal Slider Picture props
export const horizontalSliderProps = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: sliderResponsiveVertical,
};

export const getPathName = (path: string, startPath: string) => {
  return path.split(startPath)[1];
};

export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
