import { Montserrat } from 'next/font/google';

export const montserratFont = Montserrat({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
});

export const font = {
  sm: {
    size: '12px',
    lineHeight: '20px',
  },
  md: {
    size: '14px',
    lineHeight: '26px',
  },
  lg: {
    size: '16px',
    lineHeight: '28px',
  },
  xl: {
    size: '18px',
    lineHeight: '26px',
  },
  xxl: {
    size: '22px',
    lineHeight: '30px',
  },
  xxxl: {
    size: '30px',
    lineHeight: '38px',
  },
  get default() {
    return this.md;
  },
} as const;

export const systemFonts = `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif`;
