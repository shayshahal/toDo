import './index.css'
import loadMenu from '/src/DOM/menu/menu.js';
import loadHome from '/src/DOM/Home/Home.js';
import loadAdd from '/src/DOM/add/add.js';
import { loadDay } from '../../Logic/user';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

localStorage.clear();
loadDay();
loadMenu();
loadHome();
loadAdd();