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

const Navbar = ({ links = [] }) => {
  if (links.length === 0) {
    links = [
      { '@id': '#home', label: 'Home' },
      { '@id': '#about', label: 'About' },
      { '@id': '#contact', label: 'Nostr' }
    ]
  }

  return html`
    <div style=${navbarStyle}>
    ${links.map(link => html`
    <a href=${link['@id']} style=${navbarLinkStyle} onMouseOver=${navbarLinkHoverStyle}>${link.label}</a>
  `)}
    </div>
  `
}

export default Navbar
