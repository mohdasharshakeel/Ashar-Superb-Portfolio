import { Providers } from './_providers';
import { rootMetadata } from './_config';
import { neue_montreal } from './_fonts';
import './globals.css';

export const metadata = rootMetadata;

/**
 * @param {import('react').PropsWithChildren}
 */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
