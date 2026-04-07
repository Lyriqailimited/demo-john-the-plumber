import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'John The Plumber',
  description: 'Leeds' trusted family plumbers with 25+ years experience in boilers, heating & emergency callouts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
