import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  minHeight: '100vh',
  margin: 0,
  width: '100%',
});

globalStyle('*, *::after, *::before', {
  boxSizing: 'border-box',
});
