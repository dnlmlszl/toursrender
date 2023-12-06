import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.inner < 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) => ({
    color: isActive ? 'orange' : 'white',
    textDecoration: 'none',
    fontSize: 'clamp(1rem, 2vw + 1rem, 2rem)',
    fontWeight: isActive ? 'bolder' : 'normal',
    transition: 'background-color 0.3s ease',
    letterSpacing: '0.25rem',
    cursor: 'pointer',
  });

  useEffect(() => {
    const resizeView = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', resizeView);

    return () => window.removeEventListener('resize', resizeView);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '1.25rem',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      {isMobileView ? (
        <div
          style={{
            color: 'white',
            fontSize: '2rem',
            marginRight: 'auto',
            cursor: 'pointer',
          }}
          onClick={toggleMenu}
        >
          &#9776;
        </div>
      ) : (
        <>
          <NavLink to="/" style={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" style={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" style={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/tours" style={linkClass}>
            Tours
          </NavLink>
        </>
      )}
      {isMobileMenuOpen && (
        <aside
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            gap: '0.5rem',
            width: '33%',
            position: 'fixed',
            top: '5rem',
            left: '0',
            boxShadow: '1px 2px 5px rgba(255, 255, 255, 0.1)',
            padding: '3.5rem 1rem',
            backdropFilter: blur('20px'),
          }}
        >
          <NavLink to="/" style={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" style={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" style={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/tours" style={linkClass}>
            Tours
          </NavLink>
        </aside>
      )}
    </nav>
  );
};

export default Navbar;
