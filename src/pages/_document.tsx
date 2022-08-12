import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

/**
 * Document
 * @constructor
 */
export default function Document(props: DocumentProps) {
  const locale = props.locale;

  return (
    <Html lang={locale}>
      <Head />
      <body>
        <script> </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
