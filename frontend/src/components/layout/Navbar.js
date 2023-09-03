import React from 'react'
import './navbar.css'
import HeaderCartButton from './HeaderCartButton'
import {useState,useEffect} from 'react'
const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isNavHidden, setIsNavHidden] = useState(false); // Track whether the navbar should be hidden

    useEffect(() => {
        let prevScrollY = window.scrollY;
    
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > prevScrollY;
    
          // Hide the navbar when scrolling down and show it when scrolling up
          setIsNavHidden(isScrollingDown);
    
          prevScrollY = currentScrollY;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <nav className={`navigation ${isNavHidden ? 'hidden-navbar' : ''}`}>
    <div className='navigation-items'>
    <div className='brand-cart'>
    <a href="/" className='brand-name'>
      PharmacyShop
    </a>
   <p><HeaderCartButton/></p>
    </div>

    <button className='hamburger'  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      {/* icon from heroicons.com */}
      {!isNavExpanded ? (<svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>): (<svg xmlns="http://www.w3.org/2000/svg" fill="none" color='white' viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
)}
    </button>
    <div
      className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar