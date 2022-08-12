import { style } from '@vanilla-extract/css';

import { defaultFontSize } from '@/styles/vars/fonts.css';

/**
 * Header style
 */
export const styleHeader = {
  header: style({
    position: 'fixed',
    top: 0,
    display: 'flex',
    width: '100%',
    padding: '24px 32px',
  }),
  inner: style({
    display: 'block',
    width: '100%',
  }),
  headerLogo: style({
    width: '78px',
    height: '48px',
  }),
  nav: style({
    display: 'block',
    width: '100%',
  }),
  menuList: style({
    display: 'inline-flex',
    justifyContent: 'flex-end',
  }),
  menuItem: style({
    display: 'inline-block',
    marginRight: '32px',
    selectors: {
      '&:last-child': {
        marginRight: 0,
      },
    },
  }),
  menuItemTitle: style({
    display: 'block',
    fontSize: defaultFontSize,
  }),
} as const;
