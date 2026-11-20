import { useEffect, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        RL
      </a>

      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#achievements">Achievements</a>
      </div>

      <a href="#contact" className="contact-button" onClick={closeMenu}>
        Contact
      </a>

      <button
        type="button"
        className={`mobile-menu-toggle${menuOpen ? ' is-open' : ''}`}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-navigation"
        className={`mobile-navigation${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <a href="#about" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>About</a>
        <a href="#skills" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>Skills</a>
        <a href="#work" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>Work</a>
        <a href="#experience" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>Experience</a>
        <a href="#achievements" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>Achievements</a>
      </div>
    </nav>
  )
}

export default Navbar
