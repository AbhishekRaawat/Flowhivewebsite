import React from 'react';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;