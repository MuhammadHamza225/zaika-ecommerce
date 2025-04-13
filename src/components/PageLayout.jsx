import React from 'react';
import Navbar from './Header';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
