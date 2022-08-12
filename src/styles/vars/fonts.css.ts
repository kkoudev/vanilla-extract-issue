import { createVar, globalStyle } from '@vanilla-extract/css';

/**
 * default font size
 */
export const defaultFontSize = createVar('defaultFontSize');

/**
 * define font variables
 */
globalStyle(':root', {
  vars: {
    [defaultFontSize]: '1.6rem',
  },
});
