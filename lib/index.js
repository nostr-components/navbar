import { html } from '../js/standalone.module.js'

const navbarStyle = {
  overflow: 'hidden',
  backgroundColor: '#333',
  paddingLeft: '200px' // Added this line
}

const navbarLinkStyle = {
  float: 'left',
  display: 'block',
  color: '#f2f2f2',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none'
}

const navbarLinkHoverStyle = {
  backgroundColor: '#ddd',
  color: 'black'
}

const dropdownStyle = {
  float: 'left',
  overflow: 'hidden'
}

const Navbar = () => {
  return html`
    <div style=${navbarStyle}>
      <a href="#home" style=${navbarLinkStyle} onMouseOver=${navbarLinkHoverStyle}>Home</a>
      <a href="#about" style=${navbarLinkStyle} onMouseOver=${navbarLinkHoverStyle}>About</a>
      <a href="#contact" style=${navbarLinkStyle} onMouseOver=${navbarLinkHoverStyle}>Nostr</a>
    </div>
  `
}

export default Navbar
