import { font, montserratFont, systemFonts } from './typography';

export const theme = {
  colors: {
    white: '#ffffff',
    primary: {
      '100': '#4CAAB4',
      '200': '#70BBC1',
      '300': '#93CDD1',
      '400': '#B7DCE2',
      '500': '#DCEEF0',
      '600': '#EDF7F8',
    },
    typography: {
      '100': '#1F2438',
      '200': '#4D5061',
      '300': '#7A7C89',
      '400': '#A5A8B1',
      '500': '#D2D3D7',
      '600': '#E9E9EB',
    },
    success: {
      '100': '#59B58E',
      '200': '#7AC3A5',
      '300': '#9CD3BC',
      '400': '#BFE1D1',
      '500': '#DFF0E8',
      '600': '#EFF8F5',
    },
    warning: {
      '100': '#F5B462',
      '200': '#F8C381',
      '300': '#FAD2A1',
      '400': '#FBE1C0',
      '500': '#FDF0DF',
      '600': '#FEF7EF',
    },
    danger: {
      '100': '#EA5455',
      '200': '#EE7677',
      '300': '#F29898',
      '400': '#F7BBBB',
      '500': '#FBDDDD',
      '600': '#FEEEEF',
    },
  },
  spacing: {
    xxsm: '4px',
    xsm: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    page: '128px',
  },
  icon: {
    sm: '16px',
    md: '24px',
    lg: '36px',
    xl: '64px',
    get default() {
      return this.md;
    },
  },

  fontFamily: {
    montserrat: `${montserratFont.style.fontFamily}, ${systemFonts}`,
  },
  font,
} as const;

export type ThemeType = typeof theme;
