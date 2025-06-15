import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Button } from '@/components/ui/button';
import MobileNav from './MobileNav'; // Import the MobileNav component

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Analyze', href: '/analyze' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const isAuthenticated = true; // Replace with actual auth state
  const currentUser = { id: 'me', username: 'Guest' };
  const location = useLocation(); // Get current location

  const handleLogout = () => {
    // TODO:users management
    console.log('User logged out');
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-muted text-muted-foreground'>
      <div className='container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Mobile Navigation Toggle (Hamburger Icon) */}
        <div className='md:hidden flex items-center mr-4'>
          <MobileNav
            navLinks={navLinks}
            isAuthenticated={isAuthenticated}
            currentUser={currentUser}
            onLogout={handleLogout}
          />
        </div>

        {/* Logo/Site Title */}
        <Link
          to='/'
          className='flex items-center space-x-2 text-xl font-extrabold text-primary md:text-2xl mr-auto md:mr-6'
        >
          <span>Chess App</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              // Conditionally add underline for active link
              className={`text-base font-medium transition-colors hover:text-primary ${
                link.name === 'Analyze' ? 'text-primary' : ''
              } ${
                location.pathname === link.href ? 'underline underline-offset-4' : '' // Added underline
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* User Actions (Desktop) */}
        <div className='hidden md:flex items-center space-x-4 ml-auto'>
          {isAuthenticated ? (
            <>
              <Button variant='ghost' asChild className='text-muted-foreground hover:text-primary'>
                <Link to={`/users/${currentUser.id}`}>Profile</Link>
              </Button>
              <Button variant='outline' onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant='ghost' asChild className='text-muted-foreground hover:text-primary'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button asChild>
                <Link to='/register'>Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
