import Footer from '../Components/Footer.js';
import Sidebar from '../Components/Sidebar.js';

export function init() {
  const content = document.querySelector('#content');
  content.appendChild(Sidebar());
  content.appendChild(document.createElement('main'));
  content.appendChild(document.createElement('div'));
  const body = document.querySelector('body');
  body.appendChild(Footer());
}