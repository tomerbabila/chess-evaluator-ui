import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

export default function Layout() {
  return (
    <div className='app-container'>
      <Header />

      <main className='content'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
