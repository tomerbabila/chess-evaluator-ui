import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

// Define the shape of the nav links
interface NavLink {
  name: string;
  href: string;
}

// Define the props for the MobileNav component
interface MobileNavProps {
  navLinks: NavLink[];
  isAuthenticated: boolean;
  currentUser: { id: string; username: string };
  onLogout: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ navLinks, isAuthenticated, currentUser, onLogout }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='h-9 w-9 border-primary text-primary hover:bg-primary/10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-5 w-5'
          >
            <line x1='4' x2='20' y1='12' y2='12'></line>
            <line x1='4' x2='20' y1='6' y2='6'></line>
            <line x1='4' x2='20' y1='18' y2='18'></line>
          </svg>
          <span className='sr-only'>Toggle mobile menu</span>
        </Button>
      </SheetTrigger>
      {/* Sheet Content for mobile menu */}
      <SheetContent side='left' className='w-[280px] sm:w-[350px] bg-card text-card-foreground'>
        <div className='flex flex-col h-full'>
          <div className='py-6 px-6 border-b border-border'>
            <Link
              to='/'
              className='flex items-center space-x-2 text-xl font-extrabold text-primary'
              onClick={() => setIsSheetOpen(false)}
            >
              <span>Chess App</span>
            </Link>
          </div>
          <nav className='flex flex-col gap-4 py-6 flex-grow px-6'>
            {navLinks.map((link) => (
              <SheetClose key={link.name} asChild>
                <Link
                  to={link.href}
                  className={`text-lg font-medium text-foreground hover:text-primary ${
                    link.name === 'Analyze' ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </nav>
          {/* Authentication/Profile links at the bottom of the sheet */}
          <div className='flex flex-col gap-3 pb-6 border-t border-border mt-auto px-6'>
            {isAuthenticated ? (
              <>
                <SheetClose asChild>
                  <Link
                    to={`/users/${currentUser.id}`}
                    className='w-full text-lg font-medium text-background bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-center'
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Profile
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    onClick={() => {
                      onLogout();
                      setIsSheetOpen(false); // Close sheet after logout
                    }}
                    className='w-full text-lg font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2 rounded-md text-center'
                  >
                    Logout
                  </Button>
                </SheetClose>
              </>
            ) : (
              <>
                <SheetClose asChild>
                  <Link
                    to='/login'
                    className='w-full text-lg font-medium text-background bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-center'
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Login
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to='/register'
                    className='w-full text-lg font-medium text-background bg-accent hover:bg-accent/90 px-4 py-2 rounded-md text-center'
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Sign Up
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
