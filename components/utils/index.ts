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

export function generateKey(length: number) {
  let result = '';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const MOUNTS_PER_YEAR_OPTIONS = [
  { value: '0-10', label: '0-10' },
  { value: '11-25', label: '11-25' },
  { value: '26-50', label: '26-50' },
  { value: '51-100', label: '51-100' },
  { value: '100+', label: '100+' },
];

export const US_STATES = [
  {
    value: 'Alabama',
    label: 'AL',
  },
  {
    value: 'Alaska',
    label: 'AK',
  },
  {
    value: 'American Samoa',
    label: 'AS',
  },
  {
    value: 'Arizona',
    label: 'AZ',
  },
  {
    value: 'Arkansas',
    label: 'AR',
  },
  {
    value: 'California',
    label: 'CA',
  },
  {
    value: 'Colorado',
    label: 'CO',
  },
  {
    value: 'Connecticut',
    label: 'CT',
  },
  {
    value: 'Delaware',
    label: 'DE',
  },
  {
    value: 'District Of Columbia',
    label: 'DC',
  },
  {
    value: 'Federated States Of Micronesia',
    label: 'FM',
  },
  {
    value: 'Florida',
    label: 'FL',
  },
  {
    value: 'Georgia',
    label: 'GA',
  },
  {
    value: 'Guam',
    label: 'GU',
  },
  {
    value: 'Hawaii',
    label: 'HI',
  },
  {
    value: 'Idaho',
    label: 'ID',
  },
  {
    value: 'Illinois',
    label: 'IL',
  },
  {
    value: 'Indiana',
    label: 'IN',
  },
  {
    value: 'Iowa',
    label: 'IA',
  },
  {
    value: 'Kansas',
    label: 'KS',
  },
  {
    value: 'Kentucky',
    label: 'KY',
  },
  {
    value: 'Louisiana',
    label: 'LA',
  },
  {
    value: 'Maine',
    label: 'ME',
  },
  {
    value: 'Marshall Islands',
    label: 'MH',
  },
  {
    value: 'Maryland',
    label: 'MD',
  },
  {
    value: 'Massachusetts',
    label: 'MA',
  },
  {
    value: 'Michigan',
    label: 'MI',
  },
  {
    value: 'Minnesota',
    label: 'MN',
  },
  {
    value: 'Mississippi',
    label: 'MS',
  },
  {
    value: 'Missouri',
    label: 'MO',
  },
  {
    value: 'Montana',
    label: 'MT',
  },
  {
    value: 'Nebraska',
    label: 'NE',
  },
  {
    value: 'Nevada',
    label: 'NV',
  },
  {
    value: 'New Hampshire',
    label: 'NH',
  },
  {
    value: 'New Jersey',
    label: 'NJ',
  },
  {
    value: 'New Mexico',
    label: 'NM',
  },
  {
    value: 'New York',
    label: 'NY',
  },
  {
    value: 'North Carolina',
    label: 'NC',
  },
  {
    value: 'North Dakota',
    label: 'ND',
  },
  {
    value: 'Northern Mariana Islands',
    label: 'MP',
  },
  {
    value: 'Ohio',
    label: 'OH',
  },
  {
    value: 'Oklahoma',
    label: 'OK',
  },
  {
    value: 'Oregon',
    label: 'OR',
  },
  {
    value: 'Palau',
    label: 'PW',
  },
  {
    value: 'Pennsylvania',
    label: 'PA',
  },
  {
    value: 'Puerto Rico',
    label: 'PR',
  },
  {
    value: 'Rhode Island',
    label: 'RI',
  },
  {
    value: 'South Carolina',
    label: 'SC',
  },
  {
    value: 'South Dakota',
    label: 'SD',
  },
  {
    value: 'Tennessee',
    label: 'TN',
  },
  {
    value: 'Texas',
    label: 'TX',
  },
  {
    value: 'Utah',
    label: 'UT',
  },
  {
    value: 'Vermont',
    label: 'VT',
  },
  {
    value: 'Virgin Islands',
    label: 'VI',
  },
  {
    value: 'Virginia',
    label: 'VA',
  },
  {
    value: 'Washington',
    label: 'WA',
  },
  {
    value: 'West Virginia',
    label: 'WV',
  },
  {
    value: 'Wisconsin',
    label: 'WI',
  },
  {
    value: 'Wyoming',
    label: 'WY',
  },
];
