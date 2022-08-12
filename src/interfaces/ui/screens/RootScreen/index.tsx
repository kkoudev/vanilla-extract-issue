import type { NextPage } from 'next';

import { rootStyle } from '@/interfaces/ui/screens/RootScreen/style.css';
import { Header } from '@/interfaces/ui/components/organisms/Header';
import React from 'react';

/**
 * Root screen
 * @constructor
 */
export const RootScreen: NextPage = () => {
  return (
    <div className={rootStyle.rootScreen}>
      <Header />
    </div>
  );
};
