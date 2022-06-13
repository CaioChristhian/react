import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../routes';

export default function Layout() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}
