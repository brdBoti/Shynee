import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './Layout.css';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  const pageClass =
    pathname === '/rendeles' ? 'page-rendeles' :
    pathname === '/rolunk' ? 'page-rolunk' :
    pathname === '/media' ? 'page-media' :
    pathname === '/kapcsolat' ? 'page-kapcsolat' :
    pathname === '/rendeles-kulso' ? 'page-rendeles-kulso' :
    pathname === '/rendeles-belso' ? 'page-rendeles-belso' :
    pathname === '/rendeles-kulso-belso' ? 'page-rendeles-kulso-belso' :
    'page-home';

  return (
    <div className={`page-container ${pageClass}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
