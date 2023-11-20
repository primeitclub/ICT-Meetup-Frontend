import { extendBaseTheme } from '@chakra-ui/react';
import { buttonTheme } from './buttonTheme';
import { sectionHeaderTheme } from './headerTheme';
import { TableTheme } from './AdminTable';

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = extendBaseTheme({
 fonts: {
  body: 'Darker Grotesque, sans-serif',
  heading: 'Syncopate, sans-serif'
 },
 components: {
  Button: buttonTheme,
  Heading: sectionHeaderTheme
 },
 breakpoints
});
