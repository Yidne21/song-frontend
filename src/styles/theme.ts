import { CSSObject } from 'styled-components';

type Theme = {
  breakpoints: string[];
  space: string[] ;
  sizes: string[] ;
  fonts: string[] | CSSObject;
  fontSizes: string[];
  fontWeights: number[];
  colors: {
    black: string[] ;
    white: string[] ;
    primary: string[] ;
    secondary: string[] ;
    success: string[] ;
    error: string[] ;
    warning: string[] ;
    pink: string[] ;
    teal: string[] ;
  };
  radii: string[];
  lineHeights: string[];
  zIndices: number[];
  shadows: string[];

};

export const theme: Theme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],

  space: [
    '0px',
    '4px',
    '8px',
    '12px',
    '16px',
    '24px', //5
    '32px',
    '64px',
    '96px',
    '128px',
    '256px', //10
    '512px',
    '784px',
    '982px',
  ],
  sizes: [
    '5px',
    '10px',
    '15px',
    '20px',
    '25px',
    '30px', // 5
    '35px',
    '40px',
    '45px',
    '50px',
    '55px', // 10
    '60px',
    '65px', //12
    '70px',
    '75px',
    '80px',
    '85px', //16
    '90px',
    '95px',
    '100px',
    '105px', //20
    '110px',
    '115px',
    '120px',
    '125px',
    '130px', // 25
    '135px',
    '140px',
    '145px',
    '150px',
    '155px',
    '160px',
    '165px',
    '170px',
    '175px',
    '180px',
    '185px',
    '190px',
    '195px',
    '200px',
    '225px',
    '250px',
    '275px',
    '300px',
    '325px',
    '350px', //45
    '375px',
    '400px',
    '425px',
    '450px',
    '475px',
    '500px',
    '676px',
  ],
  fonts: {
    PlayfairDisplay: '"Playfair Display", serif',
    Poppins: '"Poppins", sans-serif',
    Roboto: '"Roboto", sans-serif',
  },

  fontSizes: [
    '13px',
    '15px',
    '20px',
    '25px',
    '38px',
    '50px', //5
    '60px',
    '96px',
  ],

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],

  colors: {
    primary: ['#1D7EF0', '#605BFF', '#1565c0', '#1D7EF0'],
    secondary: [
      '#FF8058',
      '#e65100',
      '#FF8058',
      '#FF8058FC',
      '#FFFFFF4F',
      '#ff805830',
    ],
    black: [
      '#000',
      '#030229',
      '#230B34',
      '#c4c4c4',
      '#282E34',
      '#656A71', //5
      '#9DA7BC',
      '#485C75', //7
      '#F6F6F9',
      '#566176', //9
      '#C7C7C7',
      '#374659',
      '#444444', //12
    ],
    white: [
      '#FFF',
      '#E5E5E5',
      '#9DA7BC',
      '#485C75',
      '#F0F0F8',
      '#F7F7F8', //5
      '#F0F8F7',
      '#93979E', //7
      '#F0F0F8',
      '#F3F5FD', //9
      '#FDFDFD',
      '#ECEEF3', //11
      '#F5F5F7',
    ],
    error: ['#F6574C'],
    warning: ['#F5A732'],
    success: ['#19C47C'],
    pink: ['#EC407A'],
    teal: ['#008080'],
  },

  radii: [
    '0',
    '5px',
    '10px',
    '15px',
    '20px',
    '25px', //5
    '30px',
    '40px',
    '50px',
    '60px',
    '70px',
    '75px',
  ], // borderRadius

  lineHeights: ['13px', '15px', '18px', '20px', '25px', '30px', '35px'],

  zIndices: [1, 2, 3, -1, 99, 150, 250], // z-index

  shadows: [
    '0px 0px 2px #656A71',
    '0px 2px 4px 3px rgba(0, 0, 0, 0.08)',
    '0px 4px 4px rgba(0, 0, 0, 0.25)',
    ' 3px 4px 12px rgba(0, 0, 0, 0.12)',
  ], //box shadow
};
