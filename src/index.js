import './styles/page.css'
import loadMenu from '/src/scripts/menu.js';
import loadMain from '/src/scripts/main.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

loadMenu();
loadMain();