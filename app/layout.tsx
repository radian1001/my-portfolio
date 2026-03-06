import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Abhyudaya Baghel | Portfolio',
  description: 'AWS Java Developer | Emerging Tech Professional',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-50 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
