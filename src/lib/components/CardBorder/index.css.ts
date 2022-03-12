import { theme } from '$lib/styles/themes/index.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
	position: 'relative',
	width: theme.sizes[24],
	height: 'auto',
	aspectRatio: '1 / 1',
});

export const outerBorder = style({
	position: 'relative',
	padding: '0.09rem',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	background: '#000000',
	clipPath: `polygon(
    0 10%,
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  )`,
});

export const border = style({
	position: 'relative',
	width: '100%',
	height: '100%',
	padding: theme.space[1],
	overflow: 'hidden',
	boxShadow: `0px 0px 6px 7px rgb(0 0 0 / 100%)`,
	clipPath: `polygon(
    0 10%,
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  )`,
});

export const innerBorder = style({
	width: '100%',
	height: '100%',
	padding: '0.09rem',
	overflow: 'hidden',
	background: '#000000',
	clipPath: `polygon(
    0 10%,
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  )`,
});

export const inner = style({
	position: 'relative',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	boxShadow: `inset -1px 1px 1px 1px rgb(0 0 0 / 20%), inset -1px -1px 6px 7px rgb(0 0 0 / 20%)`,
	clipPath: `polygon(
    0 10%,
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  )`,
});

export const heroTypeBadge = style({
	position: 'absolute',
	top: 0,
});

export const ranking = style({
	position: 'absolute',
	bottom: theme.space[1.5],
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export const badge = style({
	width: theme.sizes[6],
});

export const star = style({
	width: theme.sizes[4],
	transform: 'scale(1.1)',
});
