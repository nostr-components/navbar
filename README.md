

<div align="center">  
  <h1>navbar</h1>
</div>

<div align="center">  
<i>navbar</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nostr-components/navbar/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/nostr-components-navbar)](https://npmjs.com/package/nostr-components-navbar)
[![npm](https://img.shields.io/npm/dw/nostr-components-navbar.svg)](https://npmjs.com/package/nostr-components-navbar)
[![Github Stars](https://img.shields.io/github/stars/nostr-components/navbar.svg)](https://github.com/nostr-components/navbar/)

Sure, here is a proposed README.md for your Navbar component:

---

# Nostr Navbar Component

Welcome to the Nostr Navbar Component repository! This is a flexible and stylish navigation bar component, designed for applications built using Preact. It is an essential part of any web application, guiding users across different sections of your website with ease and elegance.

## Features

- 🎨 Customizable: Easily adapt the Navbar to match your application's aesthetic.
- 🧱 Built with Preact: This component is crafted using Preact, a fast, 3KB alternative to React with the same modern API.
- 🔗 User Navigation: Facilitates seamless navigation across different sections of your application.
- 📱 Responsive: Works smoothly across different devices and screen sizes.

## Installation

To use this component in your project, download the source code from this repository. 

## Usage

Here is a simple example of how to use the Nostr Navbar Component:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script src="https://unpkg.com/preact@latest/dist/preact.umd.js"></script>
    <script src="https://unpkg.com/htm@latest/dist/htm.umd.js"></script>
    <script src="path/to/Navbar.js"></script>

    <script>
      const { h, render } = preact;
      const html = htm.bind(h);
      const links = [
        { '@id': '#home', label: 'Home' },
        { '@id': '#about', label: 'About' },
        // ... other links
      ]
  
      return (
        <div>
          <Navbar links={links} />
          {/* rest of your app */}
        </div>
      )

      render(html`<${Navbar} />`, document.body);
    </script>
  </body>
</html>
```
## 🛠️ API & Props

### `links`
An array of objects representing the navigational links in the navbar.

- Type: `Array<{ '@id': string, label: string }>`
- Example:
  ```javascript
  const links = [
    { '@id': '#home', label: 'Home' },
    { '@id': '#about', label: 'About' },
  ];
  ```
  
### User Authentication
The component manages user authentication status and provides a Login/Logout button. Upon user login, it fetches and caches the user’s profile, which can then be utilized in your application.

### User Profile
The component fetches and caches user profile data upon login, which can be accessed via local storage.

## 💡 Notes
- Ensure that CORS is properly configured for API requests to external servers.
- Always test on various screen sizes to ensure UI compatibility.
- Ensure to handle potential exceptions and API changes in future developments.

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! See our [contributing guide](CONTRIBUTING.md) to get started.

---

Made with 💖 by [Melvin Carvalho](https://melvincarvalho.com#me)
```