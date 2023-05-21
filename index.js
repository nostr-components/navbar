import { html } from './js/standalone.module.js'

const Navbar = () => {
  return html`
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Nostr</a>
    </div>
  `
}

export default Navbar
