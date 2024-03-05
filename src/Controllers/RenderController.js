import Footer from '../Components/Footer.js';

export function loadFooter() {
  const body = document.querySelector('body');
  body.append(Footer());
}