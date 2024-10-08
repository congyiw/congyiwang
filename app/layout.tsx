// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
