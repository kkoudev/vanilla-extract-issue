import React from 'react';
import type { AppProps } from 'next/app';

export default function App(props: AppProps) {
  const Component = props.Component;
  const pageProps = props.pageProps as Record<string, unknown>;

  return <Component {...pageProps} />;
}
