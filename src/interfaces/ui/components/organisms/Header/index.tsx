import React from 'react';

import { styleHeader } from './style.css';

/**
 * Header
 * @constructor
 */
export const Header = (): React.ReactElement | null => {
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.inner}>
        <nav className={styleHeader.nav}>
          <h2 aria-hidden={true}>Menu</h2>
          <ul className={styleHeader.menuList}>
            <li className={styleHeader.menuItem}>
              <a href={''}>
                <p className={styleHeader.menuItemTitle}>AAAA</p>
                <span>A</span>
              </a>
            </li>
            <li className={styleHeader.menuItem}>
              <a href={''}>
                <p className={styleHeader.menuItemTitle}>BBBB</p>
                <span>B</span>
              </a>
            </li>
            <li className={styleHeader.menuItem}>
              <a href={''}>
                <p className={styleHeader.menuItemTitle}>CCCC</p>
                <span>C</span>
              </a>
            </li>
            <li className={styleHeader.menuItem}>
              <a href={''}>
                <p className={styleHeader.menuItemTitle}>DDDD</p>
                <span>D</span>
              </a>
            </li>
            <li className={styleHeader.menuItem}>
              <a href={''}>
                <p className={styleHeader.menuItemTitle}>EEEE</p>
                <span>E</span>
              </a>
            </li>
            <li className={styleHeader.menuItem}>
              <a href={''}>
                <p className={styleHeader.menuItemTitle}>FFFF</p>
                <span>F</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
