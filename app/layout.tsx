import type { Metadata } from 'next';
import { Geist, Geist_Mono, Figtree } from 'next/font/google';
import './styles/globals.css';
import './styles/utilities.css';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MCOC Claimer - Auto-claim your daily rewards',
  description: 'Automatically claim your Marvel Contest of Champions webstore rewards every day',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={figtree.variable}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
