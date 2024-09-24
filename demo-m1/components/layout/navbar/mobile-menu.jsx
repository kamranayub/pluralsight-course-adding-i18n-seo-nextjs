'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';

import MobileMenuModal from './modal';

export default function MobileMenu({ menu }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
      >
        <Bars3Icon className="h-4" />
      </button>
      <MobileMenuModal 
        isOpen={isOpen} 
        menu={menu} 
        closeMobileMenu={closeMobileMenu} 
      />
    </>
  );
}
