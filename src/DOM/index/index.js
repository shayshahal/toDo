import './index.css'
import loadMenu from '/src/DOM/menu/menu.js';
import loadMain from '/src/DOM/main/main.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

loadMenu();
loadMain();