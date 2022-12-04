import './page.css'
import loadMenu from '/src/Menu/menu.js';
import loadMain from '/src/MainTab/main.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

loadMenu();
loadMain();