'use client';


import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/logo.webp';

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 hover:text-yellow-400 transition-colors">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);



interface IconProps {
  isOpen: boolean;
}

const MenuIcon = ({ isOpen }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-all duration-300 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
    style={{
      position: 'absolute',
      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
    }}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = ({ isOpen }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
    style={{
      position: 'absolute',
      transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
    }}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const navLinks = [
  { href: 'https://wa.me/966504960716', text: 'تواصل معنا', external: true },
  { href: '#transformations', text: 'التحولات', id: 'transformations' },
  { href: '#subscriptions', text: 'باقات الاشتراك', id: 'subscriptions' },
  { href: '#services', text: 'خدمات', id: 'services' },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 100;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full top-0 left-0 right-0 z-50 py-2" dir='ltr'>
      <div className="w-[80%] max-w-5xl 2xl:w-[100%] 2xl:max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-full">
          <Image
            src={logo}
            alt="logo"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36 transition-transform duration-500 hover:scale-90 z-10"
            width={144}
            height={144}
          />

          <div className="flex items-center gap-6">
            <div className="lg:hidden flex items-center gap-6">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white focus:outline-none transition-transform duration-300 hover:scale-110 relative w-8 h-8 flex items-center justify-center"
              >
                <MenuIcon isOpen={isOpen} />
                <CloseIcon isOpen={isOpen} />
              </button>
            </div>
          </div>

          <nav className="hidden lg:flex justify-center items-center gap-8">
<ul dir='rtl' className="flex gap-10 items-center 2xl:gap-16 2xl:text-2xl 2xl:font-thin">
  {navLinks.map(({ href, text, external }) => {
    const isContact = text === 'تواصل معنا';

    return (
      <li key={href}>
        <a
          href={href}
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer' : undefined}
          onClick={(e) => !external && handleSmoothScroll(e, href)}
          className={`text-white text-lg py-1.5 font-bold cursor-pointer transition-all duration-300 2xl:text-3xl
            ${isContact
              ? 'border border-yellow-400 bg-yellow-500/20 hover:bg-yellow-500/30 py-3 px-6 rounded-full'
              : 'relative hover:text-yellow-300 after:content-[""] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:right-0 after:bg-gradient-to-r after:from-transparent after:via-yellow-300 after:to-transparent after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto'
            }`}
        >
          {text}
        </a>
      </li>
    );
  })}
</ul>
          </nav>


        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-[#17171a] rounded-lg mt-3 mx-auto w-[100%] max-w-5xl ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
        dir='ltr'
      >
        <ul className="flex flex-col gap-4 text-center px-4">
          {navLinks.map(({ href, text, external }) => (
            <li key={href}>
              <a
                href={href}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={(e) => !external && handleSmoothScroll(e, href)}
                className="text-white text-lg font-medium hover:text-yellow-300 transition block py-2 border-b border-[#2a2a3a] cursor-pointer"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Nav;