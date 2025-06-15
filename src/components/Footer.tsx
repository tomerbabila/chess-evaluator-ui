import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-muted text-muted-foreground py-6 border-t border-border/40'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm'>
        {/* Copyright & Branding */}
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <p>&copy; {new Date().getFullYear()} Chess Analysis App. All rights reserved.</p>
          <p className='mt-1'>Built with ❤️ and powered by Stockfish</p>
        </div>

        {/* Footer Navigation/Links */}
        <nav className='flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2'>
          <Link to='/privacy' className='hover:text-primary transition-colors'>
            Privacy Policy
          </Link>
          <Link to='/terms' className='hover:text-primary transition-colors'>
            Terms of Service
          </Link>
          <Link to='/contact' className='hover:text-primary transition-colors'>
            Contact
          </Link>
          {/* Add social media links/icons here if desired */}
        </nav>
      </div>
    </footer>
  );
}
